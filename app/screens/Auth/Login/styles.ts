import styled from "styled-components/native";
import { tw } from "tailwind";

export const Container = styled.View`
  ${tw("h-full justify-center items-center")}
`;

export const InputView = styled.View`
  ${tw("justify-center w-10/12")}
`;

export const textStyle = tw("items-start mb-1");

export const InputContainer = tw("mb-5 w-full ");
