import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import SelectPlatform from "./SelectPlatform";
import { useEffect } from "react";
import { ParentPlatforms } from "../hooks/usePlatforms";
interface Props {
  selectedGenre: Genre | null;
  selectedParentPlatform: ParentPlatforms | null;
}

const GameGrid = ({ selectedGenre, selectedParentPlatform }: Props) => {
  const { data, error, IsLoading } = useGames(
    selectedGenre,
    selectedParentPlatform
  );
  const skeletons = [1, 2, 3, 4, 5, 6]; //number of skeleton we want to show
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedGenre, selectedParentPlatform]); // 👈 Runs whenever `selectedGenre` changes
  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        justifyContent={"center"}
        padding={10}
        gap={6}
      >
        {IsLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
