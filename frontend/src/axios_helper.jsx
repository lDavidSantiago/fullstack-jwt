import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request = (method, url, data) => {
  const token = localStorage.getItem('token'); // sacas el token
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  return axios({
    method: method,
    url: url,
    data: data,
    headers: headers, // incluye token si existe
  })
    .then(response => response.data)
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
};

