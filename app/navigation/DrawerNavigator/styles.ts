import { Platform, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { color, font } from "theme";

export const DrawerContentContainer = styled.View`
  flex: 1;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  padding: ${Platform.select({
    ios: "0 20px 30px",
    android: "20px 20px 30px"
  })};
  margin-bottom: 10px;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  border-width: 1px;
  border-color: ${color.primary};
  width: 80px;
  height: 80px;
`;

export const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  font-family: ${font.bold};
  color: ${color.text};
  padding-left: 20px;
`;

export const styles = StyleSheet.create({
  logoutContainer: {
    backgroundColor: color.primary,
    borderColor: color.primary,
    borderWidth: 1,
    marginBottom: Platform.select({ android: 20, ios: 30 })
  },
  logoutText: {
    color: color.textDarkBg,
    fontFamily: font.bold
  }
});
