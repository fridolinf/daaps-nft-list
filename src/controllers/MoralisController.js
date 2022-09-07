import ENDPOINT from "api/endpoints/nft";

import { Header } from "utils/network/headers";
import * as services from "utils/network/services";
import API_BASE_URL from "api/baseUrl";
import Moralis from "moralis";
class MoralisController {
  appId;

  serverUrl;

  isReady = false;

  constructor() {
    this.appId = process.env.VUE_APP_MORALIS_APP_ID;
    this.serverUrl = process.env.VUE_APP_MORALIS_SERVER_URL;
    this.isReady = false;

    console.info("Starting moralisController");
  }

  // async init() {
  //   try {
  //     await Moralis.start({
  //       appId: this.appId,
  //       serverUrl: this.serverUrl,
  //     });
  //   } catch (error) {
  //     console.error(error, "@errorInitMoralisController");
  //   }
  // }

  async getNftCollectionByAddress(address) {
    try {
      const request = await services.GET(
        `${API_BASE_URL}${address}${ENDPOINT.getCollectionByAddress}`,
        Header()
      );
      if (request.status === 200) {
        const { data } = request;
        console.log(data);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const moralisController = new MoralisController();
export default moralisController;
