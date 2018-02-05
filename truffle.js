module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "101.201.148.102",
            port:8545,
            gas:"3000000",
            network_id: "*" // Match any network id
        }
    }
};
