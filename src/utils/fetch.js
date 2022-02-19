// axios for http requests
import axios from "axios"

// BASE API URL
import { API_URL } from "constants/index"

// configure axios to use the base api url
// eslint-disable-next-line import/prefer-default-export
export const movieAxios = axios.create({
  baseURL: API_URL,
})
