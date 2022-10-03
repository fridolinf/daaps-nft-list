import { tab } from "@testing-library/user-event/dist/tab";
import CardCollection from "components/CardCollection";
import { tabsHeader } from "helper/tabs";
import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderSection() {
  const [tabChain, setTabChain] = useState("0x1");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const wallet_address = localStorage.getItem("wallet");
  const handleSelect = (idx, chain) => {
    // console.log(e, "what is e tab");
    // setCurrentTab(e);
    setActiveTabIndex(idx);
    setTabChain(chain);
  };
  const handleSelectOption = (e) => {
    console.log(e.target.value);
    tabsHeader.filter((data) => {
      if (data.name === e.target.value) {
        setTabChain(data.chain);
      }
    });
  };
  return (
    <div className=" py-5 sm:pb-0 mx-auto text-center">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        {wallet_address.toLocaleLowerCase()}
      </h3>
      <div className="mt-3 sm:mt-4 flex justify-center py-5">
        <div className="xl:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabsHeader.find((tab) => tab.current).name}
            // onClick={tabsHeader.find((tab, i) => handleSelect(i, tab.chain))}
            onChange={handleSelectOption}
          >
            {tabsHeader.map((tab, i) => (
              <option
                key={tab.name}
                // onSelect={() => {
                //   handleSelect(i, tab.chain);
                // }}
              >
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden xl:block">
          <nav className="-mb-px flex space-x-4">
            {tabsHeader.map((tab, i) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => handleSelect(i, tab.chain)}
                className={classNames(
                  tab.current === activeTabIndex &&
                    "border-indigo-500 text-indigo-600 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mx-20">
        <CardCollection chainId={tabChain} />
      </div>
    </div>
  );
}
