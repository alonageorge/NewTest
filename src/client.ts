/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from "axios";

// const API_SERVER_URL = "http://localhost:8080/api/";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  responseType: 'json',
})

client.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {}
    // Do something before request is sent
    config.headers!.Authorization = `Bearer ${sessionStorage.getItem(
      'access_token'
    )}`
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) =>
    // Do something with request error
    // console.log(`Was not able to send request:`);
    // console.log(error);
    Promise.reject(error)
)

// Add a response interceptor
// client.interceptors.response.use(
//   (response) =>
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     // console.log(`[Success] - Received http response: ${response.config.url}`);
//     // console.log(response);
//     response,
//   async (error) =>
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     // BE CAREFUL (error.config.headers) but (error.request._headers);
//     // console.log(`[Error] - Received http response: ${error?.config.url}`);
//     // console.log(`Message: ${error.message}`);
//     // console.log(`Response: ${JSON.stringify(error.response)}`);

//     // if 401 in respone we should logout
//     // if (error.config && error.response && error.response.status === 401) {
//     // }
//     Promise.reject(error)
// )

export default client
