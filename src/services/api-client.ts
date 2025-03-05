import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f6dbd88c36cd4ca2a9261f3dc0ca733b'
    }
})