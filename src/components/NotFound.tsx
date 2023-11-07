import { Alert, AlertIcon, Stack, Text } from "@chakra-ui/react";
import useSearch from "../zustand/useSearch";

const NotFound = () => {
  const { searchText } = useSearch();

  console.log(searchText);
  return (
    <Stack spacing={3}>
      <Alert status="error">
        <AlertIcon />
        <Text className="font-semibold">
          can not find any results for "{searchText}"
        </Text>
      </Alert>
    </Stack>
  );
};

export default NotFound;
