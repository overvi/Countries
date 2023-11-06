import { SimpleGrid, Flex } from "@chakra-ui/react";
import CountryGrid from "../components/CountryGrid";
import Filtering from "../components/Filtering";
import NavBar from "../components/NavBar";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <>
      <NavBar />
      <SimpleGrid justifyContent="center">
        <Flex
          flexWrap={{ md: "nowrap", base: "wrap" }}
          className="justify-between items-center pb-8"
        >
          <SearchInput />
          <Filtering />
        </Flex>
        <CountryGrid />
      </SimpleGrid>
    </>
  );
};

export default Home;
