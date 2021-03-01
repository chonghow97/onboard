import { ViewProps } from "react-native";

// stores component props
export interface VideoProps extends ViewProps {
  /** string of video uri, used in `{ uri: videoUri }` */
  uri?: string;

  /** string of video thumbnail image, used in `{ uri: videoUri }` */
  thumbnail?: string;

  /** is the video uri source still loading, handles the video player going into error before video uri is retreived from api */
  loading?: boolean;
}
