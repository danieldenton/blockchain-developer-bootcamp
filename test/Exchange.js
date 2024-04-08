const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), "ether")
}

describe("Exchange", () => {
	let feeAcount, deployer

	beforeEach(async () => {
		accounts = await ethers.getSigners()
		deployer = accounts[0]
		feeAccount = accounts[1]

		const Exchange = await ethers.getContractFactory("Exchange")
		token = await Token.deploy(feeAcount.address)
	})
	describe("Deployment", () => {
		it("tracks the fee account", async () => { 
			expect(await token.feeAcount()).to.equal(feeAcount.address)
		})	
	})	
})	