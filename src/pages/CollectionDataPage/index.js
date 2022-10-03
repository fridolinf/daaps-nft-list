import React, { useEffect, useState } from "react";
import moralisController from "controllers/MoralisController";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const CollectionDataPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collectionData, setCollectionData] = useState([]);
  const { chain, tokenAddress, wallet } = location.state;
  const getCollectionData = async () => {
    const get = await moralisController.getDataCollection(
      wallet,
      tokenAddress,
      chain
    );
    if (get) {
      let pushMeta = [];
      for (let index = 0; index < get.length; index++) {
        const element = get[index];
        const metadata = JSON.parse(element.metadata);
        const m = { ...element, meta: { ...metadata } };
        pushMeta.push(m);
      }
      setCollectionData(pushMeta);
    }
  };
  useEffect(() => {
    getCollectionData();
  }, []);
  console.log(collectionData);
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className=" py-5 sm:pb-0 ">
        <button
          onClick={goBack}
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <ArrowUturnLeftIcon className="h-5 w-5" aria-hidden="true" />
          <span className="mx-2">Back</span>
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {collectionData.map(({ meta, token_address, token_id }) => (
          <li key={meta.id ? meta.id : token_id} className="relative mt-5">
            <div className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={
                  meta.image
                    ? meta.image
                    : "https://img.freepik.com/free-vector/flat-design-no-photo-sign-design_23-2149289006.jpg?w=740&t=st=1662625375~exp=1662625975~hmac=bce50423c39e2bbf09ba7cba38273366cc6ff21892276d7b78ac2d3019522bab"
                }
                // width={50}
                alt={meta.name ? meta.name : "no data"}
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {meta.name ? meta.name : "no data"}
                </span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 text-center block truncate text-sm font-medium text-gray-900">
              {meta.name ? meta.name : "no name"}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {meta.description ? meta.description : "no description"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionDataPage;
