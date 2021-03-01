import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { tw } from "tailwind";
import { TextFieldProps } from "./props";

// Simple reusable component, handles simple ui or functions
export const TextField = (props: TextFieldProps) => {
  const { style, error, ...restProps } = props;
  // --------------------STATES & VARIABLES

  // --------------------HOOKS

  // --------------------FUNCTIONS

  // --------------------RENDER
  return (
    <TextInput
      style={[
        tw("bg-background border-primary border-2 rounded-lg pl-3"),
        style,
        error && tw("border-error")
      ]}
      {...restProps}
    />
  );
};
