import { TransactionResponse } from "@ethersproject/abstract-provider";
import { useAccount } from "wagmi";

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from "react";
import {
  Button,
  Text,
  VStack,
  Heading,
  Alert,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import Web3 from "web3";
import { _abiDaoFactory } from "../../../../abi";
import { DaoFactory } from "../../../../typechain-types";
import { IDaoFactory } from "../../../../typechain-types/src/DAOFactory/DaoFactory";

type ConfirmationNumberTransactionResponse = {
  confirmationNumber: number;
  receipt: TransactionResponse;
};

const ownerAddress = "0x8d920B053f61c343CC716AA35eb32F0a05C9FFb3";
async function callCreateFunction(
  setErrorMessage: Dispatch<SetStateAction<string | undefined>>,
  setConfirmationNumberTransactionResponseList: Dispatch<
    SetStateAction<ConfirmationNumberTransactionResponse[]>
  >,
  setTransactionHash: Dispatch<SetStateAction<string | undefined>>,
  params: IDaoFactory.CreateParamsStruct
) {
  setErrorMessage(undefined);
  setTransactionHash(undefined);
  setConfirmationNumberTransactionResponseList([]);
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(_abiDaoFactory, ownerAddress);
  await (contract.methods as DaoFactory)
    .create(params)
    // @ts-expect-error Property 'send' does not exist on type 'Promise<ContractTransaction>'.ts(2339)
    .send({ from: params.owner })
    .on("transactionHash", (hash: string) => {
      console.log("Transaction hash:", hash);
      setTransactionHash(hash);
    })
    .on(
      "confirmation",
      (confirmationNumber: number, receipt: TransactionResponse) => {
        console.log("Confirmation number:", confirmationNumber);
        console.log("Receipt:", receipt);
        setConfirmationNumberTransactionResponseList((prev) => [
          ...prev,
          {
            confirmationNumber,
            receipt,
          },
        ]);
      }
    )
    .on("error", (error: any) => {
      console.error("Error:", error);
      if ("message" in error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unknown error");
      }
    });
}

type Props = {
  goToNext: () => void;
}

export const DaoCreater = memo(({ goToNext }: Props): JSX.Element => {
  const { address } = useAccount();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [transactionHash, setTransactionHash] = useState<string>();
  const [
    confirmationNumberTransactionResponseList,
    setConfirmationNumberTransactionResponseList,
  ] = useState<ConfirmationNumberTransactionResponse[]>([]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      if (!address) {
        console.error("Error: Your address not found");
        return;
      }

      const params: IDaoFactory.CreateParamsStruct = {
        owner: address,
        vote_maximumSupply: Number(
          (event.target as HTMLFormElement).vote_maximumSupply.value
        ),
        vote_name: (event.target as HTMLFormElement).vote_name.value,
        vote_symbol: (event.target as HTMLFormElement).vote_symbol.value,
        vote_URI: (event.target as HTMLFormElement).vote_URI.value,
        timelock_minDelay: Number(
          (event.target as HTMLFormElement).timelock_minDelay.value
        ),
        daoName: (event.target as HTMLFormElement).daoName.value,
        governance_votingDelay: Number(
          (event.target as HTMLFormElement).governance_votingDelay.value
        ),
        governance_votingPeriod: Number(
          (event.target as HTMLFormElement).governance_votingPeriod.value
        ),
        governance_quorumPercentage: Number(
          (event.target as HTMLFormElement).governance_quorumPercentage.value
        ),
      };
      callCreateFunction(
        setErrorMessage,
        setConfirmationNumberTransactionResponseList,
        setTransactionHash,
        params
      );
    },
    [address]
  );

  return (
    <VStack spacing="1rem" p="1rem" width="100%">
      {errorMessage !== undefined && (
        <Alert status="error">{errorMessage}</Alert>
      )}
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <VStack spacing="1rem">
          <FormControl>
            <FormLabel>Vote maximum supply</FormLabel>
            <NumberInput min={0} name="vote_maximumSupply" defaultValue="10000">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Vote name</FormLabel>
            <Input name="vote_name" type="text" defaultValue="GRAN OPENING VOTES" />
          </FormControl>
          <FormControl>
            <FormLabel>Vote symbol</FormLabel>
            <Input name="vote_symbol" type="text" defaultValue="GOV" />
          </FormControl>
          <FormControl>
            <FormLabel>Vote URI</FormLabel>
            <Input name="vote_URI" type="text" defaultValue="ipfs://metadata.json" />
          </FormControl>
          <FormControl>
            <FormLabel>Timelock min delay</FormLabel>
            <NumberInput min={0} name="timelock_minDelay" defaultValue="10">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>DAO name</FormLabel>
            <Input name="daoName" type="text" defaultValue="GOV DAO" />
          </FormControl>
          <FormControl>
            <FormLabel>Governance voting delay</FormLabel>
            <NumberInput min={0} name="governance_votingDelay" defaultValue="1">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Governance voting period</FormLabel>
            <NumberInput min={0} name="governance_votingPeriod" defaultValue="10">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Governance quorum percentage</FormLabel>
            <NumberInput min={0} name="governance_quorumPercentage" defaultValue="10">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <HStack spacing="1rem">
            <Button type="submit">Create DAO</Button>
            <Button type="button" onClick={goToNext}>Next</Button>
          </HStack>
        </VStack>
      </form>
      {transactionHash !== undefined && (
        <>
          <Heading>Transaction Hash</Heading>
          <Text>{transactionHash}</Text>
        </>
      )}
      {confirmationNumberTransactionResponseList.length > 0 && (
        <>
          <Heading>Event: confirmation</Heading>
          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th isNumeric>
                    <Tooltip
                      label="Confirmation Number"
                      aria-label="Confirmation Number"
                    >
                      Number
                    </Tooltip>
                  </Th>
                  <Th maxWidth="80vw">Receipt</Th>
                </Tr>
              </Thead>
              <Tbody>
                {confirmationNumberTransactionResponseList.map(
                  ({ confirmationNumber, receipt }) => (
                    <Tr key={receipt.hash}>
                      <Td isNumeric textAlign="center">
                        {confirmationNumber}
                      </Td>
                      <Td whiteSpace="pre-wrap" maxWidth="80vw">
                        {JSON.stringify(receipt, null, 2)}
                      </Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </VStack>
  );
});
DaoCreater.displayName = "DaoCreater";
