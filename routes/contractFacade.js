var Web3 = require('web3');

//合同ABI

const blogFacadeAbi= require("../ABI/BlogFacade.json");


//ETH 节点地址
const nodeAddress = process.env.FULL_NODE_URL || "http://10.45.144.209:8545";

//合约地址
const blogFacadeAddress = "0xae9011270d3aa5583e10de5b96bc21d129e3d184";


//web3初始化


const web3 = new Web3(new Web3.providers.HttpProvider(nodeAddress));
//合约实例
const facadeInstance = new web3.eth.Contract(blogFacadeAbi.abi,blogFacadeAddress);


const from ="0x4af8f99f80c51193bbabf1aca8c3a6de2bf03c7e";
const to ="0x9d94be74e4ff7344054aee36ad7ff05145d4be28";


//根据索引查询博客
async function getBlog(index)

{
    const content = await facadeInstance.methods._getBlog(index).call();
    return content;

}

//发布博客
async function publish(from,owner,content,value){

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
