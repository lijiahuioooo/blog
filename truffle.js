module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "10.45.144.209",
            port:8545,
            gas:"3000000",
            network_id: "*" // Match any network id
        }
    }
};
