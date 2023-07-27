# Nymphe (TypeScript) - Boilerplate for JSON-RPC Web Applications

Nymphe is a boilerplate that standardises the development of web-based JSON-RPC applications like that of:
- [Orderflow Auctions](https://frontier.tech/the-orderflow-auction-design-space)
- [ERC-4337 Bundlers](https://eips.ethereum.org/EIPS/eip-4337)
- [Block Builders](https://www.titanbuilder.xyz/docs)

...and other RPC-based applications.

A standard interface across Websockets and HTTP and across multiple clients that build on top of this  boilerplate makes it easier for users, dApps, SDKs and searchers to connect and switch between these applications, lowering switching cost.

## Example Use Cases

## Build and Run

You can use this template by going to this repository's [GitHub page](https://github.com/0xTaker/nymphe) and clicking on the `Use this template` button.

To install the necessary dependencies:
```
yarn
```

This template may require a set of environment variables to configure, which can be made accessable via the `.env` file. An examplar can be copied from the provided `.env.example`. Currently, this template consists of simply:
```
PORT=3000
CHAIN_ID=0x1
```
Additional environment variables can be added and accessed within the code using `process.env.<ENV_NAME>` such as `process.env.CHAIN_ID`.

In order to build and start the application:
```
npm run build
npm start

```

A simple sanity check that it is on:
```
curl localhost:3000
> Hello World!

curl -X POST localhost:3000 -H 'Content-Type: application/json' -d '{ "id": 1, "jsonrpc": "2.0", "method": "eth_chainId", "params": []}'
> {"id":1,"result":"0x1"}
```