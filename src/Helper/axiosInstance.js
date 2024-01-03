import axios from "axios";

const Base_Url = "https://lms-server-09ae.onrender.com/api/vi";

const axiosInstance= axios.create();
axiosInstance.defaults.baseURL= Base_Url;
axiosInstance.defaults.withCredentials= true;

export default axiosInstance;   