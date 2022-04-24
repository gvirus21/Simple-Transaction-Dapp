//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract TransactionManager {

    string public name;
    address payable public owner;

    constructor( string memory _name ) {
        name = _name;
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner can perform this action.");
        _;
    }

    function deposit() payable public {}

    function withdraw() payable public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Transfer unsuccessfull");
    }
}
