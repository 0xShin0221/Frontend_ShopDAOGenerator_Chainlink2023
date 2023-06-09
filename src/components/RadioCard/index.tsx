import {
  createIcon,
  Box,
  BoxProps,
  Circle,
  Icon,
  Stack,
  StackProps,
  UseRadioProps,
  useId,
  useRadio,
  useRadioGroup,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
  useMemo,
} from "react";
import { IconType } from "react-icons";

interface RadioCardGroupProps<T> extends Omit<StackProps, "onChange"> {
  name?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
}

export const RadioCardGroup = <T extends string>(
  props: RadioCardGroupProps<T>
) => {
  const { children, name, defaultValue, value, onChange, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  });

  const cards = useMemo(
    () =>
      Children.toArray(children)
        .filter<ReactElement<RadioCardProps>>(isValidElement)
        .map((card) => {
          return cloneElement(card, {
            radioProps: getRadioProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getRadioProps]
  );

  return (
    <Stack direction={"row"} {...getRootProps(rest)}>
      {cards}
    </Stack>
  );
};

interface RadioCardProps extends BoxProps {
  value: string;
  radioProps?: UseRadioProps;
  icon: IconType;
}

export const RadioCard = (props: RadioCardProps) => {
  const { radioProps, children, icon, borderColor, ...rest } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioProps);
  const id = useId(undefined, "radio-button");

  const styles = useStyleConfig("RadioCard", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();
  return (
    <Box
      as="label"
      cursor="pointer"
      borderColor={borderColor}
      {...labelProps}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
    >
      <input {...inputProps} aria-labelledby={id} />
      <Box sx={styles} {...checkboxProps} {...rest}>
        <Stack direction="row">
          <Box flex="1">
            <Icon as={icon} boxSize="6" />
            {children}
          </Box>
          {state.isChecked ? (
            <Circle bg="accent" size="4">
              <Icon as={CheckIcon} boxSize="4" color="fg.inverted" />
            </Circle>
          ) : (
            <Circle borderWidth="2px" size="4" />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const CheckIcon = createIcon({
  displayName: "CheckIcon",
  viewBox: "0 0 12 10",
  path: (
    <polyline
      fill="none"
      strokeWidth="2px"
      stroke="currentColor"
      strokeDasharray="16px"
      points="1.5 6 4.5 9 10.5 1"
    />
  ),
});
