import { ReactText } from "react";
import { TextProps as ReactNativeTextProps } from "react-native";

// stores component props
// extend text component with react native text props
export interface TextProps extends ReactNativeTextProps {
  /**
   * Text to be displayed
   */
  children?: ReactText;
}
