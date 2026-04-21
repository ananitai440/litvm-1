# litevm

# Counter Smart Contract

A minimal Solidity counter contract — the first project in my Solidity + Hardhat 3 learning journey.

## Overview

The `Count` contract maintains a signed integer state variable that can be incremented, decremented, and read.

### Functions

| Function    | Type           | Description                         |
| ----------- | -------------- | ----------------------------------- |
| `inc()`     | state-changing | Increments `num` by 1               |
| `dec()`     | state-changing | Decrements `num` by 1               |
| `showNum()` | view           | Returns the current value of `num`  |

Note: The `int` type is used, so the counter can hold negative values as well.

## Tech Stack

- Solidity `>=0.8.0`
- Hardhat 3
- TypeScript
- Viem
- Yarn

## Setup

```bash
yarn install
```

## Compile & Test

```bash
yarn hardhat test --coverage
```


Tests cover: initial state, single and multiple increments, decrements, mixed operations, negative-to-positive transitions, and deployment isolation.

## Project Structure

```
.
├── contracts/
│   └── Count.sol
├── test/
│   └── Count.ts
├── hardhat.config.ts
├── package.json
└── README.md
```

## Known Limitations / TODO

- [ ] Make `int` explicit as `int256`
- [ ] Pin `pragma` to a fixed version (e.g. `^0.8.28`)
- [ ] Emit events on `inc()` and `dec()` (`Incremented`, `Decremented`)
- [ ] Rename contract from `Count` to `Counter`
- [ ] Add NatSpec comments

## License

MIT