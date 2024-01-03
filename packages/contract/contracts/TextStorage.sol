// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;
import "hardhat/console.sol";

contract TextStorage {
  string private text;
  constructor(string memory _text) {
    console.log("Contract was deployed! from constructor.");
    text = _text;
  }

  function viewText() public view returns (string memory) {
    string memory text2 = text;
    return text2;
  }

  function setText(string memory _text) public{
    text = _text;
  }
}