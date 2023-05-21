import {
  Box,
  Heading,
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
import { memo, useMemo } from "react";

import { StoreInfoFetcher } from "../StoreInfoFetcher";
import { DaoCreater } from "../DaoCreater";

export const DaoCreateStepper = memo(() => {
  const { activeStep, setActiveStep, goToNext } = useSteps();

  const steps = useMemo(() => [
    {
      title: "EC",
      description: "Register your EC",
      children: <StoreInfoFetcher goToNext={goToNext} />,
    },
    {
      title: "DAO",
      description: "Create DAO",
      children: <DaoCreater goToNext={goToNext} />,
    },
    { title: "NFT", description: "Define membership NFT", children: <Heading>Step: define membership NFT</Heading> },
  ], [goToNext]);

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
