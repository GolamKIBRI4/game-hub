import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useEffect } from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, IsLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6]; //number of skeleton we want to show
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [gameQuery]); // Runs whenever `selectedGenre` changes

  return (
    <>
      {error && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>{error}</p>
      )}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
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
