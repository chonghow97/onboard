import React, { memo } from "react";
import { Screen } from "components";
import { tw } from "tailwind";
import { Container, Title } from "./styles";

export const Tab2 = memo(() => {
  return (
    <Screen>
      <Container>
        <Title style={tw("text-text text-center text-2xl")}>Tab 2 Screen</Title>
      </Container>
    </Screen>
  );
});
