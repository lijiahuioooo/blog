pragma solidity ^0.4.18;

import "./BlogToken.sol";
contract BlogCoin is BlogToken
{

    string public name = "BlogCoin";
    string public symbol = "BLC";
    uint256 INITIAL_SUPPLY =10000;

    function BlogCoin() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }


}