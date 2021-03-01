import React from "react";
import { Screen, Text } from "components";
import { tw } from "tailwind";
import { HomeProps } from "./props";
import { Container } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Home = (props: HomeProps) => {
  // const {} = props;
  return (
    <Screen>
      <Container>
        <Text style={tw("text-primary text-center text-4xl")}>
          Welcome to LavaX Ignite
        </Text>
      </Container>
    </Screen>
  );
};
