const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Token", () => {
	let token
	beforeEach( async () => {
		const Token = await ethers.getContractFactory("Token")
		token = await Token.deploy()
	})
	it("has correct name", async () => {
		const name = await token.name()
		expect(name).to.equal("Pile Coin")
	})
	it("has correct symbol", async () => {
		const symbol= await token.symbol()
		expect(symbol).to.equal("PC")
	})
})