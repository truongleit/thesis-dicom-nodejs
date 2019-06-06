// Execute Point cloud rendering algorithm //
var points = [];
$(document).ready(function() {
    $('.point-cloud').click(async function() {
        $('.slice-mode-layout').addClass('hidden');
        renderAlgorithm = 'Point Cloud';

        var files = document.getElementById("file_inp").files;

        $('.lds-hourglass').addClass('block');
        showViewer('Point Cloud');
        $('.viewer').addClass('opened');

        let zInfo = await getZCoordinate(files);
        console.log(zInfo);

        for (var i = 0; i < files.length; i++) {

            await boundaryExtraction(files[i], points, i, zCoordinate);

        }
        console.log(points);

        $('.slider').slick('unslick');
        $('.switch-algorithm').val(renderAlgorithm);
        $('select').formSelect();
        $('.lds-hourglass').removeClass('block');
    });
});

async function getZCoordinate(file) {

    let data = await itk.readImageDICOMFileSeries(null, file).then(function({ image, webWorker }) {
        webWorker.terminate();
        return ([image.origin[2], image.spacing[2]]);
    });

    return data;
}

async function boundaryExtraction(file, points, index, zCoordinate) {

    //
    //// Read and draw DICOM to canvas
    //

    var inputFile = file;
    $('.viewer').append('<div id="slice-' + index + '" class="dicom-canvas"></div>');

    var element = $('#slice-' + index).get(0);
    var div = '#slice-' + index;
    cornerstone.enable(element);

    var index = cornerstoneFileImageLoader.addFile(inputFile);
    var imageId = "dicomfile://" + index;

    image = await cornerstone.loadImage(imageId)
    cornerstone.displayImage(element, image);

    //
    //// Boundary extraction
    //
    var imgElement = $('#slice-' + index + ' canvas').get(0);
    let mat = cv.imread(imgElement);
    $(div).remove();
    let rows = mat.rows
    let cols = mat.cols
    let flag = new Array(rows * cols);
    flag = flag.fill(false);

    // Set the threshold to pixel data
    cv.threshold(mat.clone(), mat, 20, 100, cv.THRESH_BINARY);

    // Mark and change inner's pixel color to white 
    flag[0] = true;
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {

            let pixel = mat.ucharPtr(row, col);
            let R = pixel[0];
            let G = pixel[1];
            let B = pixel[2];
            let A = pixel[3];

            if (flag[row * mat.cols + col] && !(R || B || G)) {
                flag[(row) * mat.cols + col + 1] = true;
                flag[(row + 1) * mat.cols + col - 1] = true;
                flag[(row + 1) * mat.cols + col] = true;
                flag[(row + 1) * mat.cols + col + 1] = true;
                pixel[0] = 0;
                pixel[1] = 0;
                pixel[2] = 0;
                pixel[3] = 255;
            } else {
                pixel[0] = 255;
                pixel[1] = 255;
                pixel[2] = 255;
                pixel[3] = 255;
            }
        }
    }
    // Apply canny edge detection to remove all inner pixels
    cv.Canny(mat.clone(), mat, 50, 100, 3, false);
    // cv.imshow('canvasOutput', mat);

    //
    //// Get all coordinates (only x,y) for slice
    //
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {

            let pixel = mat.ucharPtr(row, col);
            let grayscale = pixel[0];

            if (grayscale >= 250) {
                points.push([row, col, zCoordinate]);
            }
        }
    }
    mat.delete();

}