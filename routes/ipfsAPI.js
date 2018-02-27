const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI({host: '127.0.0.1', port: '5001', protocol: 'http'});


exports.add = (buffer) =>{
    return new Promise((resolve,reject)=>{
        try {
            ipfs.add(buffer, function (err, files) {
            if (err || typeof files == "undefined") {
                reject(err);
            } else {
                resolve(files[0].hash);
            }
        })
    }catch(ex) {
        reject(ex);
    }
})
}
exports.get = (hash) =>{
    return new Promise((resolve,reject)=>{
        try{
            ipfs.get(hash,function (err,files) {
            if (err || typeof files == "undefined") {
                reject(err);
            }else{
                resolve(files[0].content);
            }
        })
    }catch (ex){
        reject(ex);
    }
});
}