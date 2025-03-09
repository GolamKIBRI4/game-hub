import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Genre {
  id: number;
  name: string;
}

interface FetchGameGenre {
  count: number;
  results: Genre[];
}

const useGenre =()=>{


const [genres, setGames] = useState<Genre[]>([]);
const [errors, setErrors] = useState(" ");
const [IsLoading,setIsLoading]=useState(false);

useEffect(() => {
  const controller =new AbortController()

  setIsLoading(true)
   apiClient
    .get<FetchGameGenre>("/genres",{signal:controller.signal})
    .then((res) => {
      setGames(res.data.results)
      setIsLoading(false)
    })
    .catch((err) => {
      if(err instanceof CanceledError) return
      setErrors(err.message)
      setIsLoading(false)
    });

    return ()=>controller.abort()
}, []);

return {genres,errors,IsLoading}

}

export default useGenre 