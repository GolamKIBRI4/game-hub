import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>

      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
