import useData from "./useData"

interface Platform{

    id:number
    name:string
    slug:string
}

export interface ParentPlatforms{
    id:number
    name:string
    slug:string
    platforms:Platform[]
}

const usePlatforms=()=>useData<ParentPlatforms> ('/platforms/lists/parents')


export default usePlatforms