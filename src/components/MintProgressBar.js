import { Progress } from "@chakra-ui/react";
import React from "react";

export default function MintProgressBar() {
  return <Progress hasStripe value={64} colorScheme={"teal"} width={"100%"} />;
}
