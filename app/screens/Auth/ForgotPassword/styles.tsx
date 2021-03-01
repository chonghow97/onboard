import styled from "styled-components/native";
import { tw } from "tailwind";

// styling for component

export const Root = styled.View`
  ${tw("bg-background items-center justify-center flex-1")}
`;

export const TitleStyle = tw("text-primary text-lg font-bold my-3 mx-1");
