/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationIcon } from "components";
import { color as themeColor, font } from "theme";
import { DrawerContent } from "./DrawerNavigator/DrawerContent";
import { TabNavigator } from "./TabNavigator";
import { Example1Stack } from "./Example1Navigator";
import { Example2Stack } from "./Example2Navigator";

// TODO: need to think of a better way for importing images
const homeActive = require("assets/icons/drawer/homeActive.png");
const homeInactive = require("assets/icons/drawer/homeInactive.png");
const example1Active = require("assets/icons/drawer/example1Active.png");
const example1Inactive = require("assets/icons/drawer/example1Inactive.png");
const example2Active = require("assets/icons/drawer/example2Active.png");
const example2Inactive = require("assets/icons/drawer/example2Inactive.png");

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type AppParamList = {
  home: undefined;
  example1: undefined;
  example2: undefined;
};

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Drawer = createDrawerNavigator<AppParamList>();

export const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerStyle={{ backgroundColor: themeColor.background }}
      drawerContentOptions={{
        activeTintColor: themeColor.primary,
        inactiveTintColor: themeColor.text,
        labelStyle: { fontFamily: font.bold }
      }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, focused, size }) => {
          const activeIcon = {
            home: homeActive,
            example1: example1Active,
            example2: example2Active
          };
          const inactiveIcon = {
            home: homeInactive,
            example1: example1Inactive,
            example2: example2Inactive
          };

          const iconName = focused
            ? activeIcon[route.name]
            : inactiveIcon[route.name];

          return (
            <NavigationIcon source={iconName} size={size} tintColor={color} />
          );
        }
      })}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="home"
        component={TabNavigator}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="example1"
        component={Example1Stack}
        options={{ drawerLabel: "Example 1" }}
      />
      <Drawer.Screen
        name="example2"
        component={Example2Stack}
        options={{ drawerLabel: "Example 2" }}
      />
    </Drawer.Navigator>
  );
};

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
