import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useSearch from "../zustand/useSearch";

const NotFound = () => {
  const { reset } = useSearch();

  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Not Found!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Your Country is not found if you prefer you can back to home Page =
        <Link
          onClick={() => reset()}
          className="font-semibold italic px-2"
          to="/"
        >
          Home Page
        </Link>
      </AlertDescription>
    </Alert>
  );
};

export default NotFound;
