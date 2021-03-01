import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Example1 } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const ExampleScreen1 = observer(() => {
  // --------------------STATES & VARIABLES
  const [tabIndex, setTabIndex] = useState<number>(0);

  // --------------------HOOKS

  // --------------------FUNCTIONS
  const onTabIndexChange = (index: number) => {
    setTabIndex(index);
  };

  // --------------------RENDER
  return <Example1 index={tabIndex} onTabIndexChange={onTabIndexChange} />;
});
