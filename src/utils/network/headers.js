// import { REACT_APP_MORALIS_API_KEY } from "utils/envs";
const { REACT_APP_MORALIS_API_KEY } = process.env;
export function Header() {
  return {
    headers: {
      Accept: "application/json",
      "X-API-Key": REACT_APP_MORALIS_API_KEY,
    },
  };
}
