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

    function _getBlog(address owner)
    public view returns(string content){

        content = ownerToBlogHash(owner);
    }


}