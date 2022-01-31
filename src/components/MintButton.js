import { Flex, Button } from "@chakra-ui/react";
import React from "react";

export default function MintButton() {
  return (
    <Flex>
      <Button colorScheme={"teal"} size="md">
        Mint a Wild Coin
      </Button>
    </Flex>
  );
}
