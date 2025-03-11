import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'1e5e96803450436698b9ffc36ec67774'
    }
})