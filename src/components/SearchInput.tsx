import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { grayColor } from "../helpers/bgColor";
import useSearch from "../zustand/useSearch";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setSearchText } = useSearch();
  return (
    <form
      className="py-10 w-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <Flex
        bg={grayColor()}
        className="gap-2 p-1 shadow-md max-w-md rounded-md"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color="gray.300" />
          </InputLeftElement>
          <Input
            ref={ref}
            border="0"
            className="outline-none"
            type="tel"
            placeholder="Search For Country .."
            focusBorderColor="#fff"
          />
        </InputGroup>
      </Flex>
    </form>
  );
};

export default SearchInput;
