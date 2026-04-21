import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
export default buildModule("countInTs",(m)=>{
    const countInTsConst=m.contract("Count");
    return{countInTsConst};
})