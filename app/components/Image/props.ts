import { ImageSourcePropType, ImageProps as RNImageProps } from "react-native";

// stores component props
export interface ImageProps extends RNImageProps {
  /**
   * Source for image. Use `require()` for local and `{ uri: "" }` for uri links
   */
  uri?: ImageSourcePropType;

  /**
   * Determines the height and width of the image.
   *
   * Style will override this if height or width is declared.
   */
  size?: number;
}
