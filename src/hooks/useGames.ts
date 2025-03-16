import useData from "./useData";
import { Genre } from "./useGenre";
import { ParentPlatforms } from "./usePlatforms";
import { GameQuery } from "../App";
//for card 
export interface Platform{
  id:number
  name:string
  slug:string
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform:Platform}[]
  metacritic:number;
}



const useGames =(gameQuery:GameQuery)=>useData<Game>("/games",{params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id}},[gameQuery])


export default useGames  

