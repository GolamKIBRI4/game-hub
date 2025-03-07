import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'5f97ab16551e454c9c6c77d8f58759ee'
    }
})