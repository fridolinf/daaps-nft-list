import moralisController from "controllers/MoralisController";
import React, { useEffect, useState } from "react";

const NftListPage = () => {
  const [nfts, setNfts] = useState([]);
  const getNft = async (address) => {
    const get = await moralisController.getNftCollectionByAddress(address);
    console.log(get, "getcollection");
    return get;
  };
  useEffect(() => {
    const address = localStorage.getItem("wallet");
    getNft(address);
  }, []);

  return <div>NftListPage</div>;
};

export default NftListPage;
