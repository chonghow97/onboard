import React from "react";
import { Image } from "react-native";
import { NavigationIconProps } from "./props";

export const NavigationIcon = (props: NavigationIconProps) => {
  const { size, source, tintColor } = props;
  return (
    <Image source={source} style={{ width: size, height: size, tintColor }} />
  );
};
