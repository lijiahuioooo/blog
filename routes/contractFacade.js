var Web3 = require('web3');


//合同ABI

const blogFacadeAbi= require("../ABI/BlogFacade.json");


//合约地址
const blogFacadeAddress = "0x4dac04d647d2cfc67f1034fcdca11ccd50c51175";


const web3 = new Web3(new Web3.providers.HttpProvider( "http://101.201.148.102:8545"));
//合约实例
const facadeInstance = new web3.eth.Contract(blogFacadeAbi.abi,blogFacadeAddress);


const from ="0x9ab3a035722c35dc4e14160e30cf10ae2fd656dc";
const to ="0xdd16491791b906f98725ecff9c6cb04f3d5b4dc7";

//根据索引查询博客
async function getBlog(index)

{
    const content = await facadeInstance.methods._getBlog(index).call();
    return content;

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
