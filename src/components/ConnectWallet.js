import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  InjectedConnector,
  NoEthereumProviderError,
} from "@web3-react/injected-connector";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
function WalletDetails(props) {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      width={"20rem"}
    >
      <Flex
        padding={2}
        border={"1px solid teal"}
        borderRadius={"5px"}
        justify={"space-around"}
        align={"center"}
        width={"100%"}
      >
        <Flex
          marginRight={2}
          justify={"center"}
          align={"center"}
          direction={"column"}
        >
          <Jazzicon diameter={20} seed={jsNumberForAddress(props.account)} />
        </Flex>
        <Text isTruncated>{props.account}</Text>
      </Flex>
      <Button
        onClick={props.deactivate}
        variant={"outline"}
        colorScheme="teal"
        width={"100%"}
        margin={1}
      >
        Disconnect
      </Button>
    </Flex>
  );
}
const ConnectYourWalletButton = ({ connect, name }) => {
  return (
    <Button
      variant={"outline"}
      onClick={connect}
      colorScheme="teal"
      width={"100%"}
      margin={1}
    >
      Connect to {name}
    </Button>
  );
};
export default function ConnectWallet() {
  const { account, active, activate, deactivate } = useWeb3React();
  return (
    <Box position={"absolute"} right={0} top={0} padding={2}>
      {active ? (
        <WalletDetails account={account} deactivate={deactivate} />
      ) : (
        // <WalletList activate={activate} />

        <Flex direction={"column"} alignItems={"center"}>
          <ConnectYourWalletButton
            connect={() => {
              activate(
                new InjectedConnector({
                  supportedChainIds: [4],
                }),
                NoEthereumProviderError,
                true
              ).catch((e) => {
                if (e.toString().includes("UnsupportedChainIdError")) {
                  alert("Connect to Rinkeby!");
                }
                console.log(e);
              });
            }}
            name="Metamask"
            key="metamask"
          />
          <ConnectYourWalletButton
            connect={() => {
              activate(
                new WalletConnectConnector({
                  infuraId: undefined,
                  rpc: {
                    4: "https://eth-rinkeby.alchemyapi.io/v2/u2bJ_xZxEmOoNkHS8X8nGxn8qDMXe27-",
                  },
                  chainId: 4,
                })
              ).catch((e) => {
                if (e.toString().includes("UnsupportedChainIdError")) {
                  alert("Connect to Rinkeby!");
                }
                console.log(e);
              });
            }}
            name="Walletconnect"
            key="wc"
          />
        </Flex>
      )}
    </Box>
  );
}
