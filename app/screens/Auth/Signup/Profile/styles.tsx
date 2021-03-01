import styled from "styled-components/native";
import { tw } from "tailwind";

// styling for component
export const Root = styled.View`
  ${tw("bg-background items-center justify-center h-full")}
`;

export const InputView = styled.View`
  ${tw("justify-center p-2\\.5 w-10/12")}
`;

export const ErrorTextStyle = tw("text-error p-1 text-xs");
