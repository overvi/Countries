import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import useCountry from "../hooks/useCountry";
import useSearch from "../zustand/useSearch";
import { grayColor } from "../helpers/bgColor";

const Filtering = () => {
  const { setRegion, region } = useSearch();

  return (
    <Box>
      <Menu closeOnSelect={false}>
        <MenuButton w="7rem" as={Button} bg={grayColor()} className="shadow-md">
          {region || "Regions"}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            onChange={(event) => setRegion(event as string)}
            defaultValue="asc"
            title="Regions"
            type="radio"
          >
            <MenuItemOption value="Africa">Africa</MenuItemOption>
            <MenuItemOption value="America">America</MenuItemOption>
            <MenuItemOption value="Asia">Asia</MenuItemOption>
            <MenuItemOption value="Europe">Eroupe</MenuItemOption>
            <MenuItemOption value="Oceania">Oceania</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Filtering;
