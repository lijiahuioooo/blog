var Web3 = require('web3');


//合同ABI

const blogFacadeAbi= require("../ABI/BlogFacade.json");


//合约地址

const blogFacadeAddress = "0x8e6dac54ec8507fa17eb3e0c3c655bdbf61845ef";


const web3 = new Web3(new Web3.providers.HttpProvider( "http://101.201.148.102:8545"));
//合约实例
const facadeInstance = new web3.eth.Contract(blogFacadeAbi.abi,blogFacadeAddress);


const from ="0xafdf293a96a4ce3b972671048a07418941e2d3f3";
const to ="0x26a7316e8f84ab12937f9cb62980af662ac6323f";

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
