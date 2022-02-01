import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import "./TitleComponent.css";
export default function TitleComponent() {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      marginTop={-20}
    >
      <Text
        fontSize={"8xl"}
        fontWeight={"bold"}
        color={"teal"}
        // className="gradientText"
      >
        Coins Gone Wild
      </Text>
    </Flex>
  );
}
