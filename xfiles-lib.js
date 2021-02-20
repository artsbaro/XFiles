function XFiles() {
    this.Export = function (value, namefile, extension) {
        this.download(value, namefile, GetMimeType(extension));
    }

    this.Download = function (value, fileName, mimeType) {
        var bytes = new Uint8Array(value);
        var blob = new Blob([bytes], { type: mimeType });
        var downloadUrl = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = downloadUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
    }

    this.FileToByteArray = function (file) {
        return new Promise((resolve, reject) => {
            try {
                if (file != undefined) {
                    let reader = new FileReader();
                    let Request = {
                        FileByteArray = [],
                        FileName = file.name,
                        ContextType = file.type
                    };
                    reader.readAsArrayBuffer(file);
                    reader.onloadend = (evt) => {
                        if (evt.target.readyState == FileReader.DONE) {
                            let arrayBuffer = evt.target.result,
                                array = new Uint8Array(arrayBuffer);
                            for (byte of array) {
                                Request.FileByteArray.push(byte);
                            }
                        }
                        resolve(Request);
                    }
                } else {
                    resolve(null);
                }
            }
            catch (e) {
                reject(e);
            }
        })
    }
}

function GetMimeType(extension) {
    switch (extension) {
        case '.pdf':
            return 'application/pdf';
            break;
        case '.png':
            return 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
            break;
        case '.bmp':
            return 'image/bmp';
            break;
        case '.xlsx':
            return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            break;
        default:
    }
}