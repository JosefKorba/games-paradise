import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="blue.300" area="aside">
            ASIDE
          </GridItem>
        </Show>
        <GridItem bg="green.300" area="main">
          MAIN
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
