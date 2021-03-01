import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  Text,
  ActivityIndicator
} from "react-native";
import { Screen } from "components";
import { color } from "theme";
import { TouchableView, ContentView, Title, Input, Button } from "./styles";
import { PopupInputProps } from "./props";

// Simple reusable component, handles simple ui or functions
export const PopupInput = (props: PopupInputProps) => {
  const {
    title,
    defaultValue,
    onSave,
    inputContainerStyle = "",
    buttonText = "Save",
    buttonStyle = "",
    onPressBackground,
    buttonLoading,
    ...ModalProps
  } = props;

  const [input, setInput] = useState<string>(defaultValue);
  const isIos = Platform.OS === "ios";

  // --------------------STATES & VARIABLES

  // --------------------HOOKS

  // --------------------FUNCTIONS

  // --------------------RENDER
  return (
    <Modal
      visible={ModalProps.visible}
      animationType={ModalProps.animationType}
      transparent>
      <KeyboardAvoidingView behavior={isIos ? "padding" : null}>
        <TouchableWithoutFeedback onPress={onPressBackground}>
          <TouchableView>
            <ContentView>
              <Title>{title}</Title>
              <Input defaultValue={defaultValue} onChangeText={setInput} />
              <Button onPress={() => onSave(input)}>
                {buttonLoading ? (
                  <ActivityIndicator color={color.textDarkBg} size="small" />
                ) : (
                  <Text>{buttonText}</Text>
                )}
              </Button>
            </ContentView>
          </TouchableView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};
