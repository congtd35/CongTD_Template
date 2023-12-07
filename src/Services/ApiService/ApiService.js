import axios from "axios";
import { baseURL } from "../../utils/baseUrl";
const ApiService = (configuration = {}, headerCustom) => {
    let headers = {
        "Content-Type": "application/json",
        ...headerCustom,
    };
    const axiosInstance = axios.create({
        baseURL,
        timeout: 10000,
        headers,
        ...configuration,
    });
    const tokenUser = localStorage.getItem("accessToken");
    axiosInstance.interceptors.request.use(config => {
            if (tokenUser) {
                config.headers.Authorization = `Bearer ${tokenUser}`;
            }
            return config;
        }, error => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error?.response?.status === 401) {
                console.log("error 401 -> token expired");
            }

            if (error?.response?.status === 503) {
                console.log("Something went wrong. Please try later!");
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};

export default ApiService;
