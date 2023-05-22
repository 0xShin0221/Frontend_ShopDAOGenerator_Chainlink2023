import {
  Dispatch,
  SetStateAction,
  memo,
} from "react";
import {
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { _abiDaoFactory } from "../../../abi";
import { CreateParamsForm } from "@/components";

type Props = {
  goToNext: () => void;
  createParamsForm: CreateParamsForm;
  setCreateParamsForm: Dispatch<SetStateAction<CreateParamsForm>>;
};

export const DaoCreater = memo(
  ({ goToNext, createParamsForm, setCreateParamsForm }: Props): JSX.Element => {
    return (
      <VStack spacing="1rem" p="1rem" width="100%">
        <form style={{ width: "100%" }}>
          <VStack spacing="1rem">
            <FormControl>
              <FormLabel>DAO name</FormLabel>
              <Input
                name="daoName"
                type="text"
                value={createParamsForm.daoName}
                onChange={(event) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    daoName: event.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Timelock min delay</FormLabel>
              <NumberInput
                min={0}
                name="timelock_minDelay"
                value={createParamsForm.timelock_minDelay}
                onChange={(_, value) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    timelock_minDelay: value,
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
            <FormControl>
              <FormLabel>Governance voting delay</FormLabel>
              <NumberInput
                min={0}
                name="governance_votingDelay"
                value={createParamsForm.governance_votingDelay}
                onChange={(_, value) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    governance_votingDelay: value,
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
            <FormControl>
              <FormLabel>Governance voting period</FormLabel>
              <NumberInput
                min={0}
                name="governance_votingPeriod"
                value={createParamsForm.governance_votingPeriod}
                onChange={(_, value) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    governance_votingPeriod: value,
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
            <FormControl>
              <FormLabel>Governance quorum percentage</FormLabel>
              <NumberInput
                min={0}
                name="governance_quorumPercentage"
                value={createParamsForm.governance_quorumPercentage}
                onChange={(_, value) =>
                  setCreateParamsForm((prev) => ({
                    ...prev,
                    governance_quorumPercentage: value,
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
              <Button type="button" onClick={goToNext}>
                Next
              </Button>
            </HStack>
          </VStack>
        </form>
      </VStack>
    );
  }
);
DaoCreater.displayName = "DaoCreater";
