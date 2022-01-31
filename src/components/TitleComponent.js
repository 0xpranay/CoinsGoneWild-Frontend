import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function TitleComponent() {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Text size="lg" fontSize={"8xl"}>
        Coins Gone Wild
      </Text>
    </Flex>
  );
}
