import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIcon } from "components";
import { color as themeColor, font } from "theme";
import { HomeStack } from "./HomeNavigator";
import { ProfileStackScreen } from "./ProfileNavigator";

// TODO: need to think of a better way for importing images
const homeActive = require("assets/icons/bottomTab/homeActive.png");
const homeInactive = require("assets/icons/bottomTab/homeInactive.png");
const profileActive = require("assets/icons/bottomTab/profileActive.png");
const profileInactive = require("assets/icons/bottomTab/profileInactive.png");

export type TabParamList = {
  home: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: themeColor.primary,
        inactiveTintColor: themeColor.text,
        style: {
          backgroundColor: themeColor.background,
          borderTopWidth: 1
        },
        labelStyle: { fontFamily: font.regular }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const activeIcon = { home: homeActive, profile: profileActive };
          const inactiveIcon = {
            home: homeInactive,
            profile: profileInactive
          };

          const iconName = focused
            ? activeIcon[route.name]
            : inactiveIcon[route.name];

          return (
            <NavigationIcon source={iconName} size={size} tintColor={color} />
          );
        }
      })}>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStackScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
};
