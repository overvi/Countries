import { SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import useCountry from "../hooks/useCountry";
import CountryCards from "./CountryCards";
import SkeletonLoading from "./SkeletonLoading";
import { useEffect } from "react";

const CountryGrid = () => {
  const { data, error, isLoading } = useCountry();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();

  useEffect(() => {
    if (error) navigate("/notfound");
  });
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
