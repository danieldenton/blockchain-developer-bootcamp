
async function main() {
 
 const accounts = await ethers.getSigners()

 const PileCoin = await ethers.getContractAt("Token", "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853")
 console.log(`PileCoin fethed: ${PileCoin.address}`)

 const mETH = await ethers.getContractAt("Token", "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6")
console.log(`mETH fethed: ${mETH.address}`)

 const mDAI = await ethers.getContractAt("Token", "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318")
 console.log(`mDAI fethed: ${mDAI.address}`)

const exchange = await ethers.getContractAt("Exchange", "0x610178dA211FEF7D417bC0e6FeD39F05609AD788")
 console.log(`Exchange fethed: ${exchange.address}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
