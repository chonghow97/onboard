import React from "react";
import { TextProps } from "./props";
import { TextComponent } from "./styles";

// Simple reusable component, handles simple ui or functions
export const Text = (props: TextProps) => {
  const { children, ...restProps } = props;

  // --------------------RENDER
  return <TextComponent {...restProps}>{children}</TextComponent>;
};
