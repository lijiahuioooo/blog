var BlogFacade = artifacts.require("BlogFacade");

contract('BlogFacade', function(accounts) {
    it("BlogFacade start", function() {
        var install_all;
        return BlogFacade.deployed().then(function(instance) {
            install_all = instance;
            install_all._publish(accounts[1],'测试内容222',1000)
            return install_all._publish(accounts[1],'测试内容333',1000);
        }).then(function() {
            return install_all.balanceOf.call(accounts[1]);
        }).then(function(balance){
            assert.equal(balance.toNumber(),2000,"get god retain")
        }).then(function(){
            return install_all.getBlogsLength.call();
        }).then(function(len){
            console.log("logs length is"+len);
        }).then(function(){
            return install_all._getBlog.call(0);
        }).then(function(arr){
            console.log("content is "+arr);
        }).then(function(){
            return install_all._getBlogIndex(accounts[1]);
        }).then(function(result){
            console.log("_getBlogIndex is "+result);
        });
    });

});