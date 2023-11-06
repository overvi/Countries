import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Country } from "../entitis/Country";

interface Props {
  country: Country;
}

const CountryCards = ({ country }: Props) => {
  return (
    <Card className="shadow-lg rounded-md max-w-[15.5rem] overflow-hidden">
      <Image height="10rem" objectFit="cover" src={country.flags.png}></Image>
      <CardBody>
        <Link
          className="text-xl font-extrabold hover:brightness-50"
          to={`/${country.name.common}/details`}
        >
          {country.name.common}
        </Link>
        <Box className="text-sm space-y-1" pt={5}>
          <Text>
            <strong>Population</strong> : {country.population}
          </Text>
          <Text>
            <strong>Region</strong> : {country.region}
          </Text>
          <Text>
            <strong>Capital </strong>: {country.capital}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CountryCards;
