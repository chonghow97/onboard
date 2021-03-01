import { ViewProps } from "react-native";

// stores component props
export interface ScreenProps extends ViewProps {
  /**
   * Content of the screen
   */
  children?: React.ReactNode;

  /**
   * Whether the screen is scrollable
   * - Scroll suitable for forms or other things requiring a keyboard.
   * - Leave this props undefined if the fullscreen component has its own scroll function
   *   such as Flatlist.
   */
  scrollable?: boolean;

  /**
   * Whether to show scroll indicator when scrolling. Default is closed.
   */
  scrollIndicator?: boolean;
}
