import { ThemeConfig, extendTheme } from "@chakra-ui/react";


const fonts = {
    body  : "Nunito Sans , sans-serif",
}

const config : ThemeConfig = {
    initialColorMode : 'light'
}

const colors = {
    gray : {
        700 : "hsl(207, 26%, 17%)",
        600 : "#fff"
    }
}
const theme = extendTheme({config , fonts , colors})

export default theme