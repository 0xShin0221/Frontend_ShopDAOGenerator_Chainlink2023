import Head from "next/head";
import Web3 from "web3";
import {
  Button,
  VStack,
  Center,
  Box,
} from "@chakra-ui/react";

import contractAbi from "../../types/dao/DaoFactory.json";

// @ts-expect-error
const web3 = new Web3(window.ethereum);

async function requestAccount() {
  // @ts-expect-error
  if (window.ethereum) {
    // @ts-expect-error
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
}

async function getAccount() {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

async function callCreateFunction() {
  const ownerAddress = await getAccount();
  const contractAddress = "0xYourContractAddress"; 
  const contract = new web3.eth.Contract(contractAbi, contractAddress);
  const createParams = {
    owner: ownerAddress,
    vote_maximumSupply: /* value */ 1,
    vote_name: /* value */ 'test',
    vote_symbol: /* value */ 'SYMBOL',
    vote_URI: /* value */ 'url',
    timelock_minDelay: /* value */ 100,
    proposerList: /* array of addresses */ [],
    executorList: /* array of addresses */ [],
    daoName: /* value */ 'test',
    governance_votingDelay: /* value */ 100,
    governance_votingPeriod: /* value */ 100,
    governance_quorumPercentage: /* value */ 50,
  };
  await contract.methods
    .create(createParams)
    .send({ from: ownerAddress })
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
