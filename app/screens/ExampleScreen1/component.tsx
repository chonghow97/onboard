import React from "react";
import { Example1Tab } from "./Example1Tab";
import { Example1Props } from "./props";

// Handles rendering screen, receive data and methods needed from index as props
export const Example1 = (props: Example1Props) => {
  const { index, onTabIndexChange } = props;
  return <Example1Tab index={index} onTabIndexChange={onTabIndexChange} />;
};
