import React from "react";
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { tw } from "tailwind";
import { ScreenProps } from "./props";
import { Container, KeyboardAvoidView, Scroll } from "./styles";

const isIos = Platform.OS === "ios";

// Simple reusable component, handles simples ui or functions
export const Screen = (props: ScreenProps) => {
  const { children, scrollable, scrollIndicator = false, ...restProps } = props;
  // --------------------STATES & VARIABLES

  // --------------------HOOKS

  // --------------------FUNCTIONS
  const onPressScreen = Keyboard.dismiss;

  // --------------------RENDER
  const renderChild = () => {
    return (
      <TouchableWithoutFeedback onPress={onPressScreen}>
        <Container style={!scrollable && tw("h-full w-full")} {...restProps}>
          {children}
        </Container>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={tw("flex-1")}>
      <KeyboardAvoidView behavior={isIos ? "padding" : null}>
        {scrollable ? (
          <Scroll
            bounces={false}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={scrollIndicator}
            contentContainerStyle={tw(
              "items-stretch justify-start min-h-full"
            )}>
            {renderChild()}
          </Scroll>
        ) : (
          renderChild()
        )}
      </KeyboardAvoidView>
    </SafeAreaView>
  );
};
