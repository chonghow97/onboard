import styled from "styled-components/native";
import { Text } from "react-native";
import { font } from "theme";
import { tw } from "tailwind";

// styling for component
export const TextComponent = styled(Text)`
  ${tw("text-text")}
  font-family: ${font.regular};
`;
