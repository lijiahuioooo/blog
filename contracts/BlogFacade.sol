pragma solidity ^0.4.18;

import "./BlogBase.sol";
import "./BlogCoin.sol";

contract BlogFacade is BlogBase,BlogCoin{


    //发布微博
    function _publish(address _owner,
        string _content,uint _value)
    public returns (bool)
    {
         _createBlog(_owner ,_content);
         transferFrom(msg.sender,_owner, _value);
        return true;
    }

    //打赏
    function _playReward(address _from,
            address _to, uint64 _value)
    public returns (bool){
        transferFrom(_from,_to,_value);
        return true;
    }

    //获取博客

    function _getBlog(uint index)
    public view returns(string content){

        Blog storage blog = blogs[index];
        content = blog.content;

    }

    function _getBlogIndex(address owner)
    public view returns(uint256[]){
        uint256[] memory blogIndexArr = ownerToBlogIndex[owner];
        return blogIndexArr;
    }

    //博客总数
    function _blogTotal()
    public view returns(uint total){
        total = blogs.length;
    }

}