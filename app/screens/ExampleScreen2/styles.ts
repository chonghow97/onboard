import { Text } from "components";
import styled from "styled-components/native";
import { tw } from "tailwind";
import { font } from "theme";

// styling for component
export const Container = styled.View`
  ${tw("flex-1 justify-center")}
`;

export const Title = styled(Text)`
  font-family: ${font.bold};
`;
