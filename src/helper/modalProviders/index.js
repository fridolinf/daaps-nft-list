import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Web3Auth } from "@web3auth/web3auth";
import Torus from "@toruslabs/torus-embed";
import { REACT_APP_INFURA_ID } from "utils/envs";

export const ProviderModal = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: REACT_APP_INFURA_ID, // required
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Daaps Nft List", // Required
      infuraId: REACT_APP_INFURA_ID, // Required
    },
  },
  torus: {
    package: Torus,
  },
  web3auth: {
    package: Web3Auth, // required
    options: {
      infuraId: REACT_APP_INFURA_ID, // required
    },
  },
};
