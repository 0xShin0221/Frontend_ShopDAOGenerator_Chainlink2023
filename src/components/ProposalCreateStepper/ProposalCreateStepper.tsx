import { Text, Stack } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { useStep } from "./useStep";
import { steps } from "./data";
import { Step } from "./Step";

export const ProposalCreateStepper = () => {
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 0,
  });

  return (
    <>
      <Text>ProposalCreateStepper</Text>

      <Stack
        spacing="0"
        direction={{ base: "column", md: "row" }}
        width={"full"}
      >
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
    </>
  );
};
ProposalCreateStepper.displayName = "ProposalCreateStepper";
