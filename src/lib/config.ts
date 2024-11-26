import { Chain, defineChain } from "thirdweb";

export const rootstockTestnet: Chain = defineChain({
  id: 31,
  rpc: "https://public-node.testnet.rsk.co",
  nativeCurrency: {
    name: "tRBTC",
    symbol: "tRBTC",
    decimals: 18,
  },
});

export const rootstockMainnet: Chain = defineChain({
  id: 30,
  rpc: "https://public-node.rsk.co",
  nativeCurrency: {
    name: "rBTC",
    symbol: "rBTC",
    decimals: 18,
  },
});
