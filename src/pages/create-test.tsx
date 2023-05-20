import Head from "next/head";
import Web3 from "web3";
import {
  Button,
  VStack,
  Center,
  Box,
} from "@chakra-ui/react";

import contractAbi from "../../abi/DaoFactory.json";

async function requestAccount() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
}

async function getAccount() {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

const ownerAddress = '0x8d920B053f61c343CC716AA35eb32F0a05C9FFb3'
async function callCreateFunction() {
  const yourAddress = await getAccount();
  // @ts-expect-error
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(contractAbi['abi'], ownerAddress);
  const createParams = {
    owner: yourAddress,
    vote_maximumSupply: 10000,
    vote_name: 'GRAND OPENING VOTES',
    vote_symbol: 'GOV',
    vote_URI: 'ipfs://metadata.json',
    timelock_minDelay: 10,
    daoName: 'GOV DAO',
    governance_votingDelay: 1,
    governance_votingPeriod: 10,
    governance_quorumPercentage: 10,
  };
  await contract.methods
    .create(createParams)
    .send({ from: yourAddress })
    .on("transactionHash", (hash) => {
      console.log("Transaction hash:", hash);
    })
    .on("transactionHash", (hash) => {
      console.log("Transaction hash:", hash);
    })
    .on("confirmation", (confirmationNumber, receipt) => {
      console.log("Confirmation number:", confirmationNumber);
      console.log("Receipt:", receipt);
    })
    .on("error", (error) => {
      console.error("Error:", error);
    });
}
export default function CreateTest() {
  return (
    <>
      <Head>
        <title>Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box p="2rem" minHeight="100vh" backgroundColor="gray.50">
          <VStack spacing="1rem">
            <Center>
              <Button size="lg" colorScheme="teal" onClick={requestAccount}>Get Account</Button>
              <Button size="lg" colorScheme="teal" onClick={callCreateFunction}>Create</Button>
            </Center>
          </VStack>
        </Box>
      </main>
    </>
  );
}
