var Web3 = require('web3');


//合同ABI

const blogFacadeAbi= require("../ABI/BlogFacade.json");


//合约地址
const blogFacadeAddress = "0x2dffa53c99a4386fb4122124b70376c50163c465";


const web3 = new Web3(new Web3.providers.HttpProvider( "http://101.201.148.102:8545"));
//合约实例
const facadeInstance = new web3.eth.Contract(blogFacadeAbi.abi,blogFacadeAddress);


const from ="0xbeb4716ac4c51fa6051b7442dcbb2a61eeecad00";
const to ="0x8e7cad12796dea7123f52889ea22a225639af425";

//根据索引查询博客
async function getBlog(index)

{
    const blog = await facadeInstance.methods._getBlog(index).call();
    return blog;

}

//发布博客
async function publish(from,owner,content,value){

    //解锁账户
    // var lockAccount = await web3.eth.personal.unlockAccount(from,"123456",1000);
    // console.log("lockAccount==>"+lockAccount);

    return await facadeInstance.methods._publish(owner,content,value)
        .send({from:from,gas: 20000000, gasPrice: '20000000000'}).then(console.log);
       // .then(data => true)
       // .catch(err => {
       //     console.log("publish_error =>"+err);
       //     return false;
       // });
}

//查询指定账户余额
async function balance(owner){

    return await facadeInstance.methods.balanceOf(owner).call();

}

//打赏博客

async function playReward(from,to,value){

    return await facadeInstance.methods._playReward(from,to,value)
        .send({from:from,gas: 200000, gasPrice: '20000000000'});
}


async function getBlogIndexs(owner){

    return await facadeInstance.methods._getBlogIndex(owner).call().catch(console.log);
}

//获取博客总数
 async function blogTotal(){

    return  await facadeInstance.methods._blogTotal().call();
}

module.exports = {getBlog,publish,playReward,balance,blogTotal,getBlogIndexs,from,to};
