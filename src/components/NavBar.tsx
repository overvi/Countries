import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav className=" shadow-lg flex justify-between gap-5  p-5 px-10  whitespace-nowrap">
      <Text className="font-extrabold text-lg ">Where in The world?</Text>
      <Flex className="items-center gap-2">
        {colorMode === "dark" ? <FaMoon /> : <FaRegMoon />}
        <Text
          cursor="pointer"
          onClick={toggleColorMode}
          className="font-semibold"
        >
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Text>
      </Flex>
    </nav>
  );
};

// FaRegMoon

export default NavBar;
