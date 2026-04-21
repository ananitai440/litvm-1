// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Count{
    int private num;

    function inc()public returns(int){
        num++;
        return num;
    }
    function dec() public returns(int){
        num--;
        return num;
    }

    function showNum()public view returns(int){
        return num;
    }
}
