import styled from "styled-components/native";
import { color } from "theme";
import { PopupInputProps } from "./props";

export const TouchableView = styled.View`
  height: 100%;
`;

export const ContentView = styled.View`
    elevation: 20;
    height: 28%;
    margin-top: auto;
    padding: 10px;
    backgroundColor: ${color.background}
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    z-index: 999;
`;

export const Title = styled.Text`
  margin: 10px;
  ${(props: { theme: PopupInputProps }) => `${props.theme.titleStyle}`}
`;

export const Input = styled.TextInput`
  background-color: ${color.background};
  border-color: ${color.primary};
  width: 80%;
  align-self: center;
  border-radius: 7px;
  border-width: 1.5px;
  elevation: 1;
  height: 45px;
  padding-left: 10px;
  ${(props: { theme: PopupInputProps }) => `${props.theme.inputContainerStyle}`}
`;

export const Button = styled.TouchableOpacity`
  margin: 10px 0;
  align-self: center;
  align-items: center;
  background-color: ${color.primary};
  width: 80%;
  height: 45px;
  border-radius: 10px;
  elevation: 5;
  justify-content: center;
  ${(props: { theme: PopupInputProps }) => `${props.theme.buttonStyle}`}
`;

export const Buttontext = styled.Text`
  color: ${color.textDarkBg};
  ${(props: { theme: PopupInputProps }) => `${props.theme.buttonText}`}
`;
