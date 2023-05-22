import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { memo, useMemo, useState } from "react";

import { StoreInfoFetcher } from "../StoreInfoFetcher";
import { DaoCreater } from "../DaoCreater";
import { CreateParamsForm, MembershipNftDefiner } from "@/components";

export const DaoCreateStepper = memo(() => {
  const defaultValues: CreateParamsForm = {
    vote_maximumSupply: 10000,
    vote_name: "GRAN OPENING VOTES",
    vote_symbol: "GOV",
    vote_URI: "ipfs://metadata.json",
    timelock_minDelay: 10,
    daoName: "GOV DAO",
    governance_votingDelay: 1,
    governance_votingPeriod: 10,
    governance_quorumPercentage: 10,
  };
  const [createParamsForm, setCreateParamsForm] =
    useState<CreateParamsForm>(defaultValues);
  const { activeStep, setActiveStep, goToNext } = useSteps();

  const steps = useMemo(
    () => [
      {
        title: "EC",
        description: "Register your EC",
        children: <StoreInfoFetcher goToNext={goToNext} />,
      },
      {
        title: "DAO",
        description: "Create DAO",
        children: (
          <DaoCreater
            createParamsForm={createParamsForm}
            setCreateParamsForm={setCreateParamsForm}
            goToNext={goToNext}
          />
        ),
      },
      {
        title: "NFT",
        description: "Define membership NFT",
        children: (
          <MembershipNftDefiner
            createParamsForm={createParamsForm}
            setCreateParamsForm={setCreateParamsForm}
          />
        ),
      },
    ],
    [createParamsForm, goToNext]
  );

  return (
    <>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {steps[activeStep].children}
    </>
  );
});
DaoCreateStepper.displayName = "DaoCreateStepper";
