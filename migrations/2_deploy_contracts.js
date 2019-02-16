// const ConvertLib = artifacts.require("ConvertLib");

const MyNFT = artifacts.require("MyNFT");

module.exports = function(deployer) {
  deployer.deploy(MyNFT);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
};