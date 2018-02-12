var BlogBase = artifacts.require("BlogBase");

contract('BlogBase', function(accounts) {
    it("should create Blog", function() {
        var install_all;
        return BlogBase.deployed().then(function(instance) {
            install_all = instance;
            return install_all._createBlogNew(0x8e7cad12796dea7123f52889ea22a225639af425,'QmRfhWo4c24MWYXLxu69FcJBnKpmnjY9mN5nMiK8U9zNxB');
        });
    });

});