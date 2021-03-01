import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { Todo } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const TodoScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const navigation = useNavigation();

  // --------------------HOOKS

  // --------------------FUNCTIONS
  const onPressBack = () => navigation.goBack();

  // --------------------RENDER
  return <Todo onPressBack={onPressBack} />;
});
