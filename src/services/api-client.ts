import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'18af467046dd465298fb979cdf0fc120'
    }
})