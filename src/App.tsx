import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./component/NavBar";

import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
function App() {
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
        <GenreList />
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
