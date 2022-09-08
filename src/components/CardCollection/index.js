import moralisController from "controllers/MoralisController";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardCollection({ chainId }) {
  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const address = localStorage.getItem("wallet");
  const getNft = async (address, chainId) => {
    const get = await moralisController.getNftCollectionByAddress(
      address,
      chainId
    );
    // return get;
    setNfts(get);
  };
  const goToCollectionDataPage = (token_address) => {
    navigate("/data-collection", {
      state: { tokenAddress: token_address, chain: chainId, wallet: address },
    });
  };
  useEffect(() => {
    getNft(address, chainId);
  }, [chainId]);

  console.log(nfts);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div>
      {nfts.length === 0 ? (
        <div>No Data</div>
      ) : (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {nfts.map((file) => (
            <li key={file.token_address} className="relative">
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none bg-black"
                  style={{
                    background: `linear-gradient(to right, ${
                      "#" + randomColor
                    }, ${"#" + randomColor2}, ${"#" + randomColor3})`,
                  }}
                  onClick={() => goToCollectionDataPage(file.token_address)}
                >
                  <span className="font-bold outline p-1 text-white">
                    {file.name}
                  </span>
                </button>
              </div>
              <p className="pointer-events-none block text-sm font-medium text-gray-400">
                {file.symbol}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
