import React from "react";
import { Screen } from "components";
import { tw } from "tailwind";
import { Example2Props } from "./props";
import { Container, Title } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Example2 = (props: Example2Props) => {
  // const {} = props;
  return (
    <Screen>
      <Container>
        <Title style={tw("text-primary text-center text-4xl")}>
          Example Screen 2
        </Title>
      </Container>
    </Screen>
  );
};
