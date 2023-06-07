import { Text, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useStep } from "./useStep";
import { steps } from "./data";
import { Step } from "./Step";

export const ProposalCreateStepper = () => {
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 0,
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Text>ProposalCreateStepper</Text>

      <Stack spacing="0" direction={{ base: "column", md: "row" }} width="full">
        {steps.map((step, id) => (
          <Step
            key={id}
            cursor="pointer"
            onClick={() => setStep(id)}
            title={step.title}
            description={step.description}
            isActive={currentStep === id}
            isCompleted={currentStep > id}
            isFirstStep={id === 0}
            isLastStep={steps.length === id + 1}
            currentStep={currentStep}
          />
        ))}
      </Stack>

      {!isMobile && (
        <Stack spacing="0" direction="row" width="full">
          {steps[currentStep].children}
        </Stack>
      )}
    </>
  );
};
ProposalCreateStepper.displayName = "ProposalCreateStepper";
