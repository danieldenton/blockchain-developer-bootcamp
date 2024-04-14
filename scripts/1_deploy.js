
async function main() {
  console.log(`Preparing deployment...\n`)

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")
  const Exchange = await ethers.getContractFactory("Exchange")

  const accounts = await ethers.getSigners()

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

  // Deploy contract
  const pilecoin = await Token.deploy("Pile Coin", "PC", "1000000")
  await pilecoin.deployed()
  console.log(`Token deployed to: ${pilecoin.address}`)

  const mETH = await Token.deploy("mETH", "mETH", "1000000")
  await mETH.deployed()
  console.log(`Token deployed to: ${mETH.address}`)

  const mDAI = await Token.deploy("mDAI", "mDAI", "1000000")
  await mDAI.deployed()
  console.log(`Token deployed to: ${mDAI.address}`)

  const exchange = await Exchange.deploy(accounts[1], 10)
  await exchange.deployed(`Echange deployed to: ${exchange.address}`)
  console.log()
}
  

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});