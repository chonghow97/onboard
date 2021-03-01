import { Text } from "components";
import styled from "styled-components/native";
import { font } from "theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-family: ${font.bold};
`;
