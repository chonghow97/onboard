import React from "react";
import { Dimensions } from "react-native";
import { Route, TabView, TabBar } from "react-native-tab-view";
import { color } from "theme";
import { tw } from "tailwind";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
import { Example1TabProps } from "./props";
import styles from "./styles";

const initialLayout = { width: Dimensions.get("window").width };

export const Example1Tab = ({ index, onTabIndexChange }: Example1TabProps) => {
  const routes: Route[] = [
    { key: "tab1", title: "Tab 1" },
    { key: "tab2", title: "Tab 2" }
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "tab1":
        return <Tab1 />;
      case "tab2":
        return <Tab2 />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={tw("text-secondary h-1")}
        labelStyle={styles.label}
        activeColor={color.secondary}
        inactiveColor={color.palette.lightGrey}
        style={tw("bg-background")}
      />
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={onTabIndexChange}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};
