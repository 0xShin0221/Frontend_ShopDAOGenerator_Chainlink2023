import { Circle, Icon, SquareProps } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean;
  isActive: boolean;
}

export const StepCircle = (props: RadioCircleProps) => {
  const { isCompleted, isActive } = props;
  return (
    <Circle
      size="8"
      bg={isCompleted ? "brand.900" : "inherit"}
      borderWidth={isCompleted ? "0" : "2px"}
      borderColor={isActive ? "brand.900" : "inherit"}
      // {...props}
    >
      {isCompleted ? (
        <Icon as={HiCheck} color="white" boxSize="5" />
      ) : (
        <Circle bg={isActive ? "brand.900" : "border"} size="3" />
      )}
    </Circle>
  );
};
