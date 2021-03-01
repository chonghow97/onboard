/* eslint-disable import/prefer-default-export */
import { Text } from "components/Text";
import styled from "styled-components/native";
import { font } from "theme";

export const Container = styled.TouchableOpacity`
  elevation: 5;
`;

export const ButtonText = styled(Text)`
  font-family: ${font.bold};
`;
