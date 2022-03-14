const formidable = require('formidable');
const config = require(__dirname + '/../config/config.json');

var fs = require('fs');
module.exports = {
    upload: (req, folder, fileKey) => {
        var form = new formidable.IncomingForm();
        console.log('Form',form );
        return new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                console.log('Files',files);
                if (err) reject(err);
                const store = `public/${folder}`;
                if (!fs.existsSync(store)) {
                    fs.mkdirSync(store);
                }
                const path = `${store}/${new Date().getTime()}_${files[fileKey].name}`;
                fs.rename(files[fileKey].path, path, (err) => {
                    if (err) {
                        reject(err)
                    }
                    resolve({
                        path: config.basePath + path,
                        fields: fields
                    })
                });
                // res.send(fields)
            });
        })
    }
}
/**

 * Demo Feedbacks 
 */