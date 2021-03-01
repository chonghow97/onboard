import { ModalProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface PopupInputProps extends ModalProps {
  /**
   * The title to be shown on top of input field
   */
  title: string;

  /**
   * Default input data
   */
  defaultValue: string;

  /**
   * when pressed save button
   */
  onSave: (input: string) => void;

  /**
   * Title text style
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Input container Style
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Text shown on button
   */
  buttonText?: string;

  /**
   * Button loading indicator
   */
  buttonLoading?: boolean;
  /**
   * Button Style
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * When presses background
   */
  onPressBackground?: () => void;
}
