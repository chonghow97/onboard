import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { translate } from "i18n";
import { HeaderButton } from "components";
import { ProfileScreen, EditProfileScreen } from "screens";
import { color, font } from "theme";

export type StackParamList = {
  profile: undefined;
  editProfile: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: color.background
        },
        headerTitle: translate("app.profile.headerTitle"),
        headerTitleStyle: { color: color.text, fontFamily: font.header },
        headerTintColor: color.primary
      }}>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="bars"
                color={color.primary}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          )
        })}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="bars"
                color={color.primary}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          )
        })}
      />
    </Stack.Navigator>
  );
};
