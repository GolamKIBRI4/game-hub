import useData from "./useData";
import { Genre } from "./useGenre";
import { ParentPlatforms } from "./usePlatforms";
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



const useGames =(selectedGenre:Genre|null,selectedParentPlatform:ParentPlatforms|null)=>useData<Game>("/games",{params:{genres:selectedGenre?.id,platforms:selectedParentPlatform?.id}},[selectedGenre?.id,selectedParentPlatform?.id ])

export default useGames  