require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",  // Ganache RPC URL
      accounts: [
        "0x0df196077fd1e82cdcb9f97f56f06e650bbdc34fe8b418e596f59d60b98e7e9b",  // Replace with a private key from Ganache
      ],
    },
  },
};
