import React, { useContext, createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { ProviderModal } from "helper/modalProviders";

export const ConnectContext = createContext({
  connectionProvider: null,
  walletAddress: null,
  chainId: "",
  connectWallet: async () => {},
});

export function useConnectContext() {
  return useContext(ConnectContext);
}

export const ConnectProvider = ({ children, web3AuthNetwork, chain }) => {
  const [connectionProvider, setConnectionProvider] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChain] = useState();
  const web3Modal = new Web3Modal({
    providerOptions: ProviderModal,
    // disableInjectedProvider: true,
    cacheProvider: true,
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    },
  });
  const connectWallet = async () => {
    await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const providerEther = new ethers.providers.Web3Provider(provider);
    const getWallet = await providerEther.listAccounts();
    const getChain = await providerEther.getNetwork();

    if (getWallet) {
      localStorage.setItem("wallet", getWallet);
    }
    setConnectionProvider(provider);
    setWalletAddress(getWallet);
    setChain(getChain);
  };

  const contextProvider = {
    connectWallet,
    connectionProvider,
    chainId,
    walletAddress,
  };

  return (
    <ConnectContext.Provider value={contextProvider}>
      {children}
    </ConnectContext.Provider>
  );
};
