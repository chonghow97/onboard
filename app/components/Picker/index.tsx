import React, { useEffect } from "react";
import { BackHandler, Modal, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "components";
import { tw } from "tailwind";
import { PickerProps } from "./props";
import { ModalBackground, ModalContainer } from "./styles";

// Simple reusable component, handles simple ui or functions
/**
 * Modal Picker with optional header, visibility controlled outside component
 *
 * required props
 * @param visible controls visibilty of modal
 * @param items list of options with `label` and `value`, value will be shown as label if label is empty
 * @param onSelect Handles on selecting an item in `items`, argument stores `value` from selected item
 * @param onBack Handles on press device back button or modal background
 *
 */
export const Picker = (props: PickerProps) => {
  const {
    visible,
    header,
    items,
    onSelect,
    onBack,
    itemStyle,
    itemTextStyle,
    ...restProps
  } = props;

  // --------------------STATES & VARIABLES

  // --------------------HOOKS
  const onBackPress = () => {
    onBack();
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, []);

  // --------------------FUNCTIONS

  // --------------------RENDER
  return (
    <Modal visible={visible} transparent>
      <ModalBackground onPress={onBack}>
        <ModalContainer {...restProps}>
          {header && (
            <>
              <Text style={tw("text-text font-bold text-2xl m-4")}>
                {header}
              </Text>
              <View style={tw("bg-line h-1 mx-2")} />
            </>
          )}
          <FlatList
            data={items}
            ItemSeparatorComponent={() => {
              // TODO: refactor divider component
              return <View style={tw("bg-line h-1 mx-2")} />;
            }}
            renderItem={({ item }) => {
              const { label, value } = item || {};
              return (
                <TouchableOpacity
                  style={[tw("items-center flex-row p-4"), itemStyle]}
                  onPress={() => onSelect(value)}>
                  <Text style={[tw("text-text text-base"), itemTextStyle]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.label}
          />
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};
