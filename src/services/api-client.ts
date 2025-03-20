import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'25465fdb43a1434ca354e1d7afd9b5f4'
    }
})