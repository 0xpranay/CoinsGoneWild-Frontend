import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/inter";
import "@fontsource/montserrat";

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "480px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

// 3. Extend the theme
const theme = extendTheme(
  // Takes 3 arguments. First is overriding object. Optionally, Second and third are withDefaultVariant and withDefaultColorScheme
  {
    breakpoints,
    fonts: {
      heading: `Montserrat, ${base.fonts.heading}`,
      body: `Inter, ${base.fonts.body}`,
    },
  },

  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
