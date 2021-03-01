import React from "react";
import { TextInput, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { color } from "theme";
import { translate } from "i18n";
import { tw } from "tailwind";
import { PhoneNumberInputProps } from "./props";
import { Container } from "./styles";

// Simple reusable component, handles simple ui or functions
export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const {
    style,
    countryCode,
    onChangeCountryCode,
    onChangePhoneNumber,
    error = false,
    withCallingCode = true,
    withCallingCodeButton = true,
    withAlphaFilter = true,
    withFilter = true,
    ...restProps
  } = props;
  // --------------------STATES & VARIABLES
  const errorBorderStyle = error && tw("border-error");

  // --------------------HOOKS

  // --------------------FUNCTIONS

  // --------------------RENDER
  return (
    <Container
      style={[
        tw("flex-row bg-background border-primary rounded-lg border-2 h-11"),
        style,
        errorBorderStyle
      ]}
      {...restProps}>
      <View
        style={[
          tw("items-center justify-center border-primary border-r-2 px-2"),
          errorBorderStyle
        ]}>
        <CountryPicker
          countryCode={countryCode}
          withCallingCode={withCallingCode}
          withCallingCodeButton={withCallingCodeButton}
          withAlphaFilter={withAlphaFilter}
          withFilter={withFilter}
          onSelect={onChangeCountryCode}
        />
      </View>
      <TextInput
        keyboardType="number-pad"
        style={tw("text-sm w-full")}
        placeholder={translate("placeholder.phoneNumber")}
        placeholderTextColor={color.textDim}
        onChangeText={onChangePhoneNumber}
        maxLength={15}
      />
    </Container>
  );
};
