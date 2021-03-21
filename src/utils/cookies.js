import Cookies from "js-cookie";

Cookies.defaults.expires = 1;

const domain = window.location.hostname;

const path = "";

export const saveDataToStorage = ({ token, user }) => {
  Cookies.set("token", token, { domain, path });
  Cookies.set("user", JSON.stringify(user), { domain, path });
};

export const clearDataFromStorage = () => {
  Cookies.remove("token", { domain, path });
  Cookies.remove("user", { domain, path });
};

export const getDataFromStorage = () => ({
  token: Cookies.get("token", { domain, path }),
  user: Cookies.get("user", { domain, path }),
});
