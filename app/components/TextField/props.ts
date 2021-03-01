import { TextInputProps } from "react-native";

// stores component props
export interface TextFieldProps extends TextInputProps {
  /**
   * Change border of input to red when error
   */
  error?: boolean;
}
