var BlogBase = artifacts.require("BlogBase");

contract('BlogBase', function(accounts) {
    it("should create Blog", function() {
        var install_all;
        return BlogBase.deployed().then(function(instance) {
            install_all = instance;
            return install_all._createBlog(accounts[0],'测试内容');
        }).then(function() {
            return install_all.getBlogsLength.call();
        }).then(function(index){
            console.log("array length=>"+index);
        });
    });

});