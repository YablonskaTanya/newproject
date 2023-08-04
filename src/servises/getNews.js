const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "bc0bad77ce70460da1a4b27677edd171";

export const getNews = (searchText) => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
};
