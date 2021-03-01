import React from "react";
import { Image as RNImage } from "react-native";
import { ImageProps } from "./props";

// Simple reusable component, handles simple ui or functions
/**
 * Image component. Handles image loading or error.
 */
export const Image = (
  props: ImageProps = { source: null, resizeMode: "contain" }
) => {
  const { size, style, ...restProps } = props;
  // --------------------STATES & VARIABLES

  // --------------------HOOKS

  // --------------------FUNCTIONS

  // --------------------RENDER
  return (
    <RNImage style={[{ height: size, width: size }, style]} {...restProps} />
  );
};
