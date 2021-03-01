import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "components";
import { ExampleScreen1 } from "screens";
import { color, font } from "theme";

export type StackParamList = {
  example1: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const Example1Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: color.background
        },
        headerTitle: "Example 1",
        headerTitleStyle: { color: color.text, fontFamily: font.header },
        headerTintColor: color.primary
      }}>
      <Stack.Screen
        name="example1"
        component={ExampleScreen1}
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
