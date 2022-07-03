import axios from "axios";

const BASE_URL= "http://localhost:5000/api";
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzExMWQyNGJiYzZlNWEzYTg2NjliNSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTY4MjA0MTcsImV4cCI6MTY1NzA3OTYxN30.HXVVji-XttZyz0VyDBl7sexUaH9oX2aItpVizFz9qao";

export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  headers:{token:`bearer ${TOKEN}`}
})