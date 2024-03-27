// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token { 
	string public name = "Pile Coin";
	string public symbol = "PC";
	uint256 public decimals = 18;
	uint256 public totalSupply = 1000000 * (10**decimals);
}
