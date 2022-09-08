import ENDPOINT from "api/endpoints/nft";

import { Header } from "utils/network/headers";
import * as services from "utils/network/services";
import API_BASE_URL from "api/baseUrl";
import Moralis from "moralis";
class MoralisController {
  constructor() {
    console.info("Starting moralisController");
  }

  async getNftCollectionByAddress(address, chains) {
    try {
      const request = await services.GET(
        `${API_BASE_URL}${address}${ENDPOINT.getCollectionByAddress}?chain=${chains}&limit=20`,
        Header()
      );
      if (request.status === 200) {
        const { data } = request;
        return data.result;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getDataCollection(wallet_address, token_address, chain) {
    try {
      const request = await services.GET(
        `${API_BASE_URL}${wallet_address}${ENDPOINT.getCollectionData}${token_address}?chain=${chain}&limit=20`,
        Header()
      );
      if (request.status === 200) {
        const { data } = request;
        return data.result;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const moralisController = new MoralisController();
export default moralisController;
