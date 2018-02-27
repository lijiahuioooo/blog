var Web3 = require('web3');


//合同ABI

const blogFacadeAbi= require("../ABI/BlogFacade.json");


//合约地址

const blogFacadeAddress = "0xc84c581fd27e9f39c84b0d07fb60a7442705b599";


const web3 = new Web3(new Web3.providers.HttpProvider( "http://101.201.148.102:8545"));
//合约实例
const facadeInstance = new web3.eth.Contract(blogFacadeAbi.abi,blogFacadeAddress);


const from ="0x8e57b1635870828830f569a52ed2e7617950df6a";
const to ="0x3c75347f785e63d7450075428ffaa0e41486a540";

//根据索引查询博客
async function getBlog(owner)

{
    const blogList = await facadeInstance.methods._getBlog(owner).call();
    return blogList;

}

//发布博客
async function publish(from,owner,content,value){

    //解锁账户
    // var lockAccount = await web3.eth.personal.unlockAccount(from,"123456",1000);
    // console.log("lockAccount==>"+lockAccount);

    return await facadeInstance.methods._publish(owner,content,value)
        .send({from:from,gas: 500000, gasPrice: '20000000000'}).then(console.log);
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
