var fileUpload;
var xFile = new XFiles();
$(function () {
    fileUpload = $('#fileupload');
    
    fileUpload.on('change', function () {
        $('#lblFileName').text(fileUpload[0].files[0]
            ? fileUpload[0].files[0].name
            : 'Choose file.');
    });

    $('#btnFile').click(function () {
        fileUpload.click();
    });

    $('#btnConvert').click(function(){
        Convert();
    })
})

function Convert(){
    let file = fileUpload[0].files[0];

    xFile.FileToByteArray(file).then((request) => {
        let objFile = {
            ByteArray: request.FileByteArray,
            Name: request.FileName,
            ContextType: request.ContextType
        }
    })
    .catch((reject) => {
        alert(reject);
    });
}
