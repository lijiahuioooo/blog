pragma solidity ^0.4.18;


contract BlogBase {


    mapping(address => string) public ownerToBlogHash;

    // 创建博客

    function _createBlog(address owner,string data)
    public

    {
        ownerToBlogHash[owner] = data;
    }

}