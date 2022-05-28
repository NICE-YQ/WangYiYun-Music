import axios from "axios";
const service = axios.create(
    {
        baseURL:'https://netease-cloud-music-m5vipohpi-yq91230-126com.vercel.app/',
        timeout:3000,

    }
)
export default service