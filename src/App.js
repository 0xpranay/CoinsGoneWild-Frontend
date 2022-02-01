import { Flex } from "@chakra-ui/react";
import TitleComponent from "./components/TitleComponent";
import MintProgressBar from "./components/MintProgressBar";
import MintButton from "./components/MintButton";
import NFTShowcase from "./components/NFTShowcase";
import ConnectWallet from "./components/ConnectWallet";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./App.css";
function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ConnectWallet></ConnectWallet>
      <Flex
        className="App"
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={40}
        backgroundColor={"black"}
        backgroundImage={
          "linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )"
        }
      >
        <TitleComponent></TitleComponent>
        <MintProgressBar></MintProgressBar>
        <MintButton></MintButton>
        <NFTShowcase></NFTShowcase>
      </Flex>
    </Web3ReactProvider>
  );
}

export default App;
