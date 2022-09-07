import { useConnectContext } from "context";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RouteChecker = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { walletAddress, chainId } = useConnectContext();

  useEffect(() => {
    console.log(walletAddress, "cn");
    console.log(chainId, "chainId");
    if (walletAddress !== undefined) {
      navigate("/nftpage");
    } else if (walletAddress === undefined) {
      navigate("/");
    }
  }, [walletAddress]);

  // useEffect(() => {
  //   if (connectionProvider) {
  //     console.log(connectionProvider, "conection prov");
  //     // Subscribe to accounts change
  //     connectionProvider.on("accountsChanged", (accounts) => {
  //       console.log(accounts, " accounts on account changed");
  //       if (accounts !== []) {
  //         navigate("/nftpage");
  //       } else if (accounts === []) {
  //         navigate("/");
  //       }
  //     });

  //     // Subscribe to chainId change
  //     connectionProvider.on("chainChanged", (chainId) => {
  //       console.log(chainId, "CHAIN id on chain changed");
  //     });

  //     // Subscribe to provider connection
  //     connectionProvider.on("connect", ({ chainId }) => {
  //       console.log(chainId, "CHAIN id on connect");
  //     });

  //     // Subscribe to provider disconnection
  //     connectionProvider.on("disconnect", ({ code, message }) => {
  //       console.log(code, "code");
  //       console.log(message, "meessage");
  //     });
  //   }
  // }, [connectionProvider]);
  return <div>{children}</div>;
};

export default RouteChecker;
