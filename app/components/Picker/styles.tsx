import styled from "styled-components/native";
import { tw } from "tailwind";

export const ModalBackground = styled.TouchableOpacity`
  ${tw("bg-shadow flex-1 justify-center")}
`;

export const ModalContainer = styled.View`
  ${tw("self-center bg-background max-h-80 w-10/12")}
`;
