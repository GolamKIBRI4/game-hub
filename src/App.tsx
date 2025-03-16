import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { ParentPlatforms } from "./hooks/usePlatforms";
import ParentPlatformList from "./component/ParentPlatformList";

export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatforms | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem
        paddingY={5}
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={"10px"}
      >
        <GenreList
          onSelectedGenre={(genre) => {
            setGameQuery({ ...gameQuery, genre });
          }}
          selectedGenre={gameQuery.genre}
        />

        <ParentPlatformList
          onSelectedParentPlatforms={(platform) => {
            setGameQuery({ ...gameQuery, platform });
          }}
          selectedParentPlatform={gameQuery.platform}
        />
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
