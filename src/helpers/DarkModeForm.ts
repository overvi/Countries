import { ColorMode } from "@chakra-ui/react";

export function getColor(colorMode : ColorMode)  {
    return colorMode === "light" ? "#fff" : "gray.700";
  }