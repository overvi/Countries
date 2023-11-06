import { useColorMode } from "@chakra-ui/react"
import { getColor } from "./DarkModeForm"

export const grayColor = () => {
    const bgColor = getColor(useColorMode().colorMode)
    return bgColor
}