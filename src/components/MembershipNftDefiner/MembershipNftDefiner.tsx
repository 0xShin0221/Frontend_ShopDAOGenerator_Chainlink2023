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
import { _abiDaoFactory } from "../../../abi";
import { DaoFactory } from "../../../typechain-types";
import { IDaoFactory } from "../../../typechain-types/src/DAOFactory/DaoFactory";
import { CreateParamsForm } from "@/components";
import { Network, getDeployedContracts } from "@/deployedContracts";

type ConfirmationNumberTransactionResponse = {
  confirmationNumber: number;
  receipt: TransactionResponse;
};

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
  const web3 = new Web3((window as any).ethereum);
  // TODO: to the another place
  const chain = process.env.NEXT_PUBLIC_CHAIN_NAME as Network;
  if (chain === undefined) {
    throw new Error("process.env.NEXT_PUBLIC_CHAIN_NAME is undefined");
  }
  const contract = new web3.eth.Contract(
    _abiDaoFactory,
    getDeployedContracts(chain).DaoFactory
  );
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
  createParamsForm: CreateParamsForm;
  setCreateParamsForm: Dispatch<SetStateAction<CreateParamsForm>>;
};

export const MembershipNftDefiner = memo(
  ({ createParamsForm, setCreateParamsForm }: Props): JSX.Element => {
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
          ...createParamsForm,
        };
        callCreateFunction(
          setErrorMessage,
          setConfirmationNumberTransactionResponseList,
          setTransactionHash,
          params
        );
      },
      [address, createParamsForm]
    );

    return (
      <VStack spacing="1rem" p="1rem" width="100%">
        {errorMessage !== undefined && (
          <Alert status="error">{errorMessage}</Alert>
        )}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing="1rem">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="vote_name"
                type="text"
                value={createParamsForm.vote_name}
                onChange={(event) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    vote_name: event.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Symbol</FormLabel>
              <Input
                name="vote_symbol"
                type="text"
                value={createParamsForm.vote_symbol}
                onChange={(event) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    vote_symbol: event.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>URI</FormLabel>
              <Input
                name="vote_URI"
                type="text"
                value={createParamsForm.vote_URI}
                onChange={(event) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    vote_URI: event.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Maximum supply</FormLabel>
              <NumberInput
                min={0}
                name="vote_maximumSupply"
                value={createParamsForm.vote_maximumSupply}
                onChange={(_, value) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    vote_maximumSupply: value,
                  }))
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <HStack spacing="1rem">
              <Button type="submit">Create DAO</Button>
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
  }
);
MembershipNftDefiner.displayName = "MembershipNftDefiner";
