import { useConnectContext } from "context";
import React from "react";
const ConnectPage = () => {
  const { connectWallet } = useConnectContext();

  return (
    <div>
      <button onClick={connectWallet}>Connect</button>
    </div>
  );
};

export default ConnectPage;
