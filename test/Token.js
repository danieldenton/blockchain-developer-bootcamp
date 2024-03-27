const { ethers } = require("hardhat")

describe("Token", () => {
	it("has a name", () => {
		// Fetch token from the block chain
		const Token = await ethers.getContractFactory("Token")
		// Read the token
		// Check that the bname is correct
	})
})