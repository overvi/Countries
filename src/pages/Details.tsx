import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import NavigateButton from "../helpers/NavigateButton";
import { grayColor } from "../helpers/bgColor";
import getPropertyOf, { getNativeNames } from "../helpers/getPropertyOf";
import { useDetails } from "../hooks/useCountry";

const Details = () => {
  const params = useParams();
  const { data, isFetching } = useDetails(params.country!);

  const img = data?.find((img) => img)?.flags;
  const descriptions = data?.find((desc) => desc);

  if (isFetching || !descriptions)
    return <Progress size="xs" isIndeterminate />;

  return (
    <>
      <NavBar />
      <Flex p={10} className="  justify-center flex-col">
        <Box py={10}>
          <NavigateButton herf="/" />
        </Box>
        <Grid className="sm:grid-cols-1 md:grid-cols-2 gap-20">
          <Image
            objectFit="cover"
            h="100%"
            src={img?.svg}
            className=" rounded-2xl"
          ></Image>
          <GridItem className="md:grid-cols-2 sm:grid-cols-1 items-center ">
            <SimpleGrid className="md:grid-cols-2 sm:grid-cols-1">
              <Box>
                <Heading mb={8} fontSize="3xl">
                  {params.country}
                </Heading>
                <Box className="flow-content keys">
                  <Text>
                    <strong>Native Name</strong> :{getNativeNames(descriptions)}
                  </Text>
                  <Text>
                    <strong>Population</strong> : {descriptions?.population}
                  </Text>
                  <Text>
                    <strong>Region </strong>: {descriptions?.region}
                  </Text>
                  <Text>
                    <strong>Sub Region</strong> : {descriptions?.subregion}
                  </Text>
                  <Text>
                    <strong>Capital</strong> : {descriptions?.capital}
                  </Text>
                </Box>
              </Box>
              <Box className="flow-content md:m-auto sm:mt-8">
                <Text mt={5}>
                  <strong>Currencies </strong> :
                  {getPropertyOf(descriptions, "currencies")?.name}
                </Text>
                <Text>
                  <strong>Languages</strong> :
                  {getPropertyOf(descriptions, "languages")}
                </Text>
              </Box>
              {descriptions.borders && (
                <Flex className="whitespace-nowrap" mt={8}>
                  <Text>
                    <strong>Border Countries </strong> :
                  </Text>
                  <Flex className="badge-wrap  " px={5}>
                    {descriptions.borders.slice(0, 3).map((border) => (
                      <Text
                        className="shadow-slate-550 shadow-md"
                        backgroundColor={grayColor()}
                        px={{ base: 1, md: 6 }}
                      >
                        {border}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
              )}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default Details;
