
import { Box, Container, Grid } from "@mui/material"
import Filter from "../section/Filter";
import SearchResults from "../section/SearchResults";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container>
          <Grid item md={3} xs={12}>
            {/* fliter */}
            <Filter/>
          </Grid>
          <Grid item md={9} xs={12}>
            {/* search results */}
            <SearchResults />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
