import { ImageSourcePropType } from "react-native";

export interface NavigationIconProps {
  /** Icon source */
  source: ImageSourcePropType;

  /** Size of the icon in pixel */
  size: number;

  /** Changes the color of all the non-transparent pixels to the tintColor. */
  tintColor: string;
}
