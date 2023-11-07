import { SimpleGrid } from "@chakra-ui/react";
import useCountry from "../hooks/useCountry";
import CountryCards from "./CountryCards";
import SkeletonLoading from "./SkeletonLoading";
import NotFound from "./notfound";

const CountryGrid = () => {
  const { data, isLoading, error } = useCountry();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <NotFound />;
  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      className="place-items-center "
      spacing={20}
    >
      {isLoading &&
        skeletons.map((skeleton) => <SkeletonLoading key={skeleton} />)}
      {data?.map((count, index) => (
        <CountryCards key={index} country={count} />
      ))}
    </SimpleGrid>
  );
};

export default CountryGrid;
