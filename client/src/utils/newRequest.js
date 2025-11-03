import axios from "axios";

const newRequest=axios.create({
    // baseURL:"http://localhost:8800/api/",
    baseURL : `${import.meta.env.VITE_BACKEND_URL}/api`,
    withCredentials:true
})

export default newRequest