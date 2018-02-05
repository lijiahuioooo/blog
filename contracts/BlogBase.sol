pragma solidity ^0.4.18;


contract BlogBase {


    struct Blog{

        uint64 createTime;

        string content;
    }

    Blog[]  public blogs;

    mapping(address => uint256[]) public ownerToBlogIndex;

    /// 创建博客

    function _createBlog(address owner,string _content)
    public
    {
        Blog memory _blog = Blog({
            createTime: uint64(now),
            content:_content
            });
        uint newBlogIndex = blogs.push(_blog) - 1;
        uint[] storage index = ownerToBlogIndex[owner];
        index.push(newBlogIndex);
    }


    function getBlogsLength()
    public view returns(uint256 len)
    {
       len = blogs.length;
    }


}