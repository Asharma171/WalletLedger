// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CdnWalletLedger {
    address public owner;
    mapping(address => bool) walletList;

    event WalletAdded(address indexed wallet);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addWallet(address _wallet) external onlyOwner {
        require(_wallet != address(0), "invalid address");
        require(!walletList[_wallet], "already listed");

        walletList[_wallet] = true;
        emit WalletAdded(_wallet);
    }

    function isWalletListed(address _wallet) external view returns (bool) {
        return walletList[_wallet];
    }
}
