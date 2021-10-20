import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

import colors from "./colors"

const theme = {
  colors,
}

export default extendTheme(
  theme,
  withDefaultColorScheme({ colorScheme: "blue" }),
)
