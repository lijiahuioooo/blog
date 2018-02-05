var BlogCoin = artifacts.require("BlogCoin");


contract('BlogCoin', function(accounts) {
    it("should put 10000 BlogCoin in the first account", function() {
        return BlogCoin.deployed().then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
        });
    });


    it("should stransferFrom correctly", function() {
        var coin;
        // Get initial balances of first and second account.
        var account_one = accounts[0];
        var account_two = accounts[1];
        var amount = 1000;
        return BlogCoin.deployed().then(function(instance) {
            coin = instance;
            return coin.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_starting_balance = balance.toNumber();
            return coin.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_starting_balance = balance.toNumber();
            return coin.transferFrom(account_one,account_two, amount);
        }).then(function() {
            return coin.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_ending_balance = balance.toNumber();
            return coin.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_ending_balance = balance.toNumber();

            assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
            assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
        });
    });
});