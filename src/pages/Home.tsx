import { SimpleGrid, Flex } from "@chakra-ui/react";
import CountryGrid from "../components/CountryGrid";
import Filtering from "../components/Filtering";
import NavBar from "../components/NavBar";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <>
      <NavBar />
      <SimpleGrid className="mx-auto max-w-[80rem]">
        <Flex
          flexWrap={{ md: "nowrap", base: "wrap" }}
          className="justify-between items-center w-full pb-8 mx-auto"
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
