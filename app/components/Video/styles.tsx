import styled from "styled-components/native";
import { color } from "theme";

// styling for component
export const PlayButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${color.shadow};
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
