import { StyleProp, TextStyle, ViewStyle } from "react-native";

// stores component props
export interface PickerProps {
  /** picker visibility */
  visible: boolean;

  /**
   * Header text above the picker, does not get scrolled with list
   */
  header?: string;

  /** picker list */
  items: Array<{ label?: string; value: string | number }>;

  /** Handle selecting item from picker, returns the value in `items` props */
  onSelect: (value?: string | number) => void;

  /** Handles when either the device back button or modal background is pressed */
  onBack: () => void;

  // stylings
  /** item container style */
  itemStyle?: StyleProp<ViewStyle>;
  /** item text style */
  itemTextStyle?: StyleProp<TextStyle>;
}
