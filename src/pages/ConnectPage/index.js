import { useConnectContext } from "context";
import React from "react";
const ConnectPage = () => {
  const { connectWallet } = useConnectContext();

  return (
    <div className="grid place-content-center h-screen">
      <button
        onClick={connectWallet}
        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectPage;
