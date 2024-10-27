const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "2a1584a52a04d8a66d14b5149724dc18"
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=2a1584a52a04d8a66d14b5149724dc18`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=2a1584a52a04d8a66d14b5149724dc18`;
