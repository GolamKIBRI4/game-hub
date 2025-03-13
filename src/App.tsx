import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
