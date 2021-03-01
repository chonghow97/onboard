import styled from "styled-components/native";
import { tw } from "tailwind";

// styling for component

const outerContainerStyle = tw("bg-background flex-1 h-full");

const innerContainerStyle = tw("items-stretch justify-start");

export const KeyboardAvoidView = styled.KeyboardAvoidingView`
  ${outerContainerStyle}
`;

export const Scroll = styled.ScrollView`
  ${outerContainerStyle}
`;

export const ScrollContainer = styled.View`
  ${outerContainerStyle}
`;

export const Container = styled.View`
  ${innerContainerStyle}
`;
