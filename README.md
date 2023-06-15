# Dummy Paymaster
This sample project contains a simple EIP-4337 paymaster contract that will allow any `userOperation` to be sponsored by it. This is just a proof of concept and not to be used in production or any other real-world setting. 


# How to use
## 1. Install Dependencies
```bash
npm i --force
```

## 2. Add the EntryPoint address to `MyPaymasterDeploy.test.ts` script

## 3. Deploy Paymaster

```bash
 npx hardhat test test/MyPaymasterDeploy.test.ts --network vechain
```
