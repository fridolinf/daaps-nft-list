import { REACT_APP_MORALIS_API_KEY } from "utils/envs";
export function Header() {
  return {
    headers: {
      Accept: "application/json",
      "X-API-Key": REACT_APP_MORALIS_API_KEY,
    },
  };
}
