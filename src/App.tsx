import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { ParentPlatforms } from "./hooks/usePlatforms";
import ParentPlatformList from "./component/ParentPlatformList";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedParentPlatform, setSelectedParentPlatform] =
    useState<ParentPlatforms | null>(null);
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
            setSelectedGenre(genre);
          }}
          selectedGenre={selectedGenre}
        />

        <ParentPlatformList
          onSelectedParentPlatforms={(ParentPlatform) => {
            setSelectedParentPlatform(ParentPlatform);
          }}
          selectedParentPlatform={selectedParentPlatform}
        />
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedParentPlatform={selectedParentPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
