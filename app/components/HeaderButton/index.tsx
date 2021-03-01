import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  HeaderButton as RNHeaderButton,
  HeaderButtonProps
} from "react-navigation-header-buttons";

// TODO: Change this component to use image
export const HeaderButton = (props: HeaderButtonProps) => {
  return <RNHeaderButton IconComponent={Icon} iconSize={23} {...props} />;
};
