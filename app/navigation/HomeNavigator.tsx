import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "components";
import { HomeScreen } from "screens";
import { color, font } from "theme";

export type StackParamList = {
  home: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: color.background
        },
        headerTitle: "Home",
        headerTitleStyle: { color: color.text, fontFamily: font.header },
        headerTintColor: color.primary
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
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
