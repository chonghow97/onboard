import { TextProps, TouchableOpacityProps, StyleProp } from "react-native";

// stores component props
export interface ButtonProps extends TouchableOpacityProps {
  /**
   * changes the layout of the button
   * populate and use it to condition common button stylings used throughout the app
   */
  mode?: "small" | "submit";

  /**
   * change button container styling
   */

  /**
   * change text styling
   */
  textStyle?: StyleProp<TextProps>;

  /**
   * button text, default "Confirm"
   */
  text?: string;

  /** show loading indicator instead of text, disable and blur button */
  loading?: boolean;
}
