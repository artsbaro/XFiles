// Simulator xhr structure AJAX
var xhrs = new function () {
    this.ExportFile = function (prms, callback) {
        XHR.executeAjax('endpoint/webServer.asmx', callback, { filter: prms });
    };
}

var xFile = new XFiles();
$(function () {
    $('#btnDownload').click(function(){
        Download();
    })
})

function Download(){
    prm ={
        Id: 123,
        IsDownload: true
    }

    // Simulator call Ajax return a object Byte[];
    xhrs.ExportFile(prm, function (res) {
        if (res) {
            var file = new FileExport();
            file.Export(res.Array, "FileText.xlsx", ".xlsx");
        }
    });
}
