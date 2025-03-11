import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData=<T>(endpoints:string)=>{

    const [data,setData] = useState<T[]>([])
    const [error,setErrors] = useState(" ")
    const [IsLoading,setIsLoading] = useState(false)

    
    useEffect(()=>{
        
        const controller=new AbortController()
        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(endpoints,{signal:controller.signal})
        .then((res)=>{
            setData(res.data.results)
            setIsLoading(false)
        })
        .catch((err)=>{
            if(err instanceof CanceledError) return
            setErrors(err.message)
            setIsLoading(false)
        })

        return ()=>controller.abort()
    },[])

     return{data,IsLoading,error}

}

export default useData