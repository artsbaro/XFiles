var fileUpload;

$(function(){
    fileUpload = $('#fileupload');
    
    fileUpload.on('change', function () {
        $('#lblFileName').text($(this).text != ''
            ? fileUpload[0].files[0].name
            : 'Choose file.');
    });

    $('#btnConvert').click(function(){
        Convert();
    })
})


function Convert(){
    fileToByteArray(arquivoEPI).then((request) => {
        let objFile = {
            ByteArray: request.FileToByteArray,
            Name: request.FileName,
            ContextType: request.ContextType
        }
    })
    .catch((reject) => {
        alert(reject);
    });
}
