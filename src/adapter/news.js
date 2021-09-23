const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export function getTopHeadLines(category) {
  return fetch(`${BASE_URL}/top-headlines?country=us&category=${category}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((json) => json.articles);
}
