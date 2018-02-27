var ipfsAPI = require('./ipfsAPI');

async function add(content){

    let buff =  Buffer.from(JSON.stringify(content));
    var result = await ipfsAPI.add(buff);
    return result;
}


async function upload(content){
    let buff =  Buffer.from(content);
    var result = await ipfsAPI.add(buff)
    return result;
}

async function cat(hash){

    return await ipfsAPI.get(hash);
}

module.exports = {add,cat,upload};