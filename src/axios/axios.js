import Axios from "axios";

//for local host
const baseURL = "https://fakestoreapi.com";

//for production
//const baseURL = "https://backend-mfjh.onrender.com/api";
const axiosinstance = Axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
export default axiosinstance;
