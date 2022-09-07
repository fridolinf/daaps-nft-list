import ENDPOINT from "api/endpoints/nft";
import { Header, HeaderAuth } from "utils/network/headers";
import * as services from "utils/network/services";

export const getCustomer = async (acc) => {
  try {
    const request = await services.GET(`${ENDPOINT.customer}`, HeaderAuth(acc));
    if (request.status === 200) {
      const { data } = request.data;
      // setCustomer(data);
      return data;
    }
  } catch (error) {
    // setLoading(false);
    console.log(error, "err");
  }
};
export const addCustomer = async (data, acc) => {
  try {
    const request = await services.POST(
      `${ENDPOINT.customer}`,
      data,
      HeaderAuth(acc)
    );
    if (request.status === 200) {
      const { data } = request.data;
      return data;
    }
  } catch (error) {
    console.log(error, "err");
  }
};
export const updateCustomer = async (data, acc) => {
  console.log(data, "getata");
  try {
    const request = await services.PUT(
      `${ENDPOINT.customer}`,
      data,
      HeaderAuth(acc)
    );
    if (request.status === 200) {
      const { data } = request.data;
      return data;
    }
  } catch (error) {
    console.log(error, "err");
  }
};

export const deleteCustomer = async (data, acc) => {
  // console.log(data, "data add");
  console.log(data, "whats");
  console.log(localStorage.getItem("token"), "aps");

  try {
    console.log("1");
    const request = await services.DELETE(
      `${ENDPOINT.customer}`,
      data,
      HeaderAuth(acc)
    );
    console.log(request, "RREQUE");
    if (request.status === 200) {
      // const { data } = request.data;
      console.log("OK");
      // return data;
    }
  } catch (error) {
    // setLoading(false);
    console.log(error, "err");
  }
};
