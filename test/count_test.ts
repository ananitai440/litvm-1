import assert from "node:assert/strict";
// import { describe, it, before } from "node:test";
import { network } from "hardhat";

describe("count test function", function () {
  let viem: Awaited<ReturnType<typeof network.connect>>["viem"];
  let publicClient: any;

  before(async function () {
    ({ viem } = await network.connect());
    publicClient = await viem.getPublicClient();
  });

  it("inc() should increment num and showNum() should return 1", async function () {
    const count = await viem.deployContract("Count", []);
    
    await count.write.inc();  // ✅ write function → .write.methodName()
    
    const num = await count.read.showNum();  // ✅ view function → .read.methodName()
    
    assert.equal(num, 1n);  // viem returns bigint, so compare with 1n
  });
  it ("ShowNum should return 0", async function () {
    const count = await viem.deployContract("Count", []);
    const num = await count.read.showNum();
    assert.equal(num, 0n);
  });
  it ("dec should return -1",async function () {
    const count_t=await viem.deployContract("Count",[]);
    const count21=await count_t.write.dec();
    const count2=await count_t.read.showNum();
    assert.equal(count2,-1n);
});


});