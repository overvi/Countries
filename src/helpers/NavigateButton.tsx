import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { grayColor } from "./bgColor";
import { BiArrowBack } from "react-icons/bi";

const NavigateButton = ({ herf }: { herf: string }) => {
  return (
    <Button
      className="shadow-lg gap-2 border "
      bg={grayColor()}
      as={Link}
      to={herf}
    >
      <BiArrowBack /> Back
    </Button>
  );
};

export default NavigateButton;
