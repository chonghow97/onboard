import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useStores } from "models";
import { NavigationIcon } from "components";
import { color } from "theme";
import {
  Avatar,
  DrawerContentContainer,
  ProfileContainer,
  ProfileName,
  styles
} from "./styles";

const lavaxLogo = require("assets/images/lavax.png");
const logoutLogo = require("assets/icons/drawer/logout.png");

export const DrawerContent = (props) => {
  const { authStore } = useStores();
  const { logout } = authStore;
  const navigation = useNavigation();

  const onLogOut = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "authStack"
        }
      ]
    });
  };

  return (
    <DrawerContentContainer>
      <DrawerContentScrollView {...props}>
        <ProfileContainer>
          <Avatar source={lavaxLogo} />
          <ProfileName>Lava X</ProfileName>
        </ProfileContainer>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label="Log out"
        onPress={onLogOut}
        style={styles.logoutContainer}
        icon={({ size }) => (
          <NavigationIcon
            source={logoutLogo}
            size={size}
            tintColor={color.textDarkBg}
          />
        )}
        labelStyle={styles.logoutText}
      />
    </DrawerContentContainer>
  );
};
