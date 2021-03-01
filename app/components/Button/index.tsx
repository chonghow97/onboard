import React from "react";
import { ActivityIndicator } from "react-native";
import { translate } from "i18n";
import { tw } from "tailwind";
import { color } from "theme";
import { ButtonProps } from "./props";
import { Container, ButtonText } from "./styles";

// Simple reusable component, handles simple ui or functions
/**
 * Simple button component with an on press function and a label
 *
 * Pass in `mode` to change to a generalized layout, mode is passed to styles to control layout,
 * populate mode props with standard button styles
 *
 * - default label is "Confirm"
 * - button is disabled when `loading`, able to disable manually with disable props
 * - default `background color` is based on app primary color, default color is white
 * - `style` props overrides default style values
 */
export const Button = (props: ButtonProps) => {
  const {
    mode = "submit",
    text = translate("common.confirm"),
    disabled,
    loading,
    style,
    textStyle,
    ...restProps
  } = props;
  // --------------------STATES & VARIABLES
  const modeStyles = {
    submit: { container: tw("h-12 w-4/5"), text: tw("text-xl") },
    small: { container: tw("h-8 w-24"), text: tw("text-sm") }
  };
  const containerModeStyle = modeStyles[mode].container;
  const textModeStyle = modeStyles[mode].text;
  const inlineContainerStyle = tw(
    "items-center bg-primary justify-center rounded-lg"
  );
  const TextStyle = [tw("text-textDarkBg"), textModeStyle, textStyle];
  const containerStyle = [inlineContainerStyle, containerModeStyle, style];

  // --------------------RENDER
  return (
    <Container
      style={containerStyle}
      disabled={loading || disabled}
      {...restProps}>
      {loading ? (
        <ActivityIndicator color={color.textDarkBg} size="small" />
      ) : (
        <ButtonText style={TextStyle}>{text}</ButtonText>
      )}
    </Container>
  );
};
