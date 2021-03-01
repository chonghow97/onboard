import React from "react";
import { Button, Screen, Text } from "components";
import { tw } from "tailwind";
import { translate } from "i18n";
import { TodoProps } from "./props";
import { Container } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Todo = (props: TodoProps) => {
  const { onPressBack } = props;
  return (
    <Screen>
      <Container>
        <Text style={tw("text-primary font-bold text-4xl m-14")}>
          TodoScreen
        </Text>
        <Button text={translate("common.back")} onPress={onPressBack} />
      </Container>
    </Screen>
  );
};

// set default variables that might be null, ex: backend data
Todo.defaultProps = {};
