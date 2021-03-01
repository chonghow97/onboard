import React, { useState } from "react";
import { translate } from "i18n";
import { color } from "theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Screen, Button, TextField, Text, PhoneNumberInput } from "components";
import { tw } from "tailwind";
import { TouchableOpacity } from "react-native";
import { ProfileProps } from "./props";
import { Root, InputView, ErrorTextStyle } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const SignupProfile = (props: ProfileProps) => {
  const {
    // inputRef,
    onSubmit,
    onChangeFirstname,
    onChangeLastname,
    onChangeCountryCode,
    onChangePhoneNumber,
    onConfirmDob,
    handleSubmit,
    watch,
    errors
  } = props;

  const [isDatepickerVisible, setDatepickerVisible] = useState<boolean>(false);

  return (
    <Screen scrollable>
      <Root>
        <Text style={tw("text-primary text-2xl font-bold my-5")}>
          {translate("auth.signup")}
        </Text>

        <InputView>
          <Text>{translate("auth.fieldsTitle.firstName")}</Text>
          <TextField
            // refs={inputRef[1]}
            placeholder={translate("placeholder.firstName")}
            placeholderTextColor={color.textDim}
            onChangeText={(text) => onChangeFirstname(text)}
            error={errors ? !!errors.firstName : false}
          />
          {errors?.firstName && (
            <Text style={ErrorTextStyle}>{translate("errors.required")}</Text>
          )}
        </InputView>

        <InputView>
          <Text>{translate("auth.fieldsTitle.lastName")}</Text>
          <TextField
            // ref={inputRef[2]}
            placeholder={translate("placeholder.lastName")}
            placeholderTextColor={color.textDim}
            onChangeText={(text) => onChangeLastname(text)}
            error={errors ? !!errors.lastName : false}
          />
          {errors?.lastName && (
            <Text style={ErrorTextStyle}>{translate("errors.required")}</Text>
          )}
        </InputView>

        <InputView>
          <Text>{translate("auth.fieldsTitle.phoneNumber")}</Text>
          <PhoneNumberInput
            countryCode={watch("countryCode")}
            onChangeCountryCode={onChangeCountryCode}
            onChangePhoneNumber={onChangePhoneNumber}
            error={errors ? !!errors.phoneNumber : false}
          />
          {errors?.phoneNumber && (
            <Text style={ErrorTextStyle}>
              {translate("errors.invalidPhoneNumber")}
            </Text>
          )}
        </InputView>

        <InputView>
          <Text>{translate("auth.fieldsTitle.dob")}</Text>
          <TouchableOpacity
            style={tw(
              "bg-background border-primary rounded-lg border-2 h-11 pl-2 justify-center text-text"
            )}
            onPress={() => {
              setDatepickerVisible(!isDatepickerVisible);
            }}>
            <Text>{watch("dob")}</Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatepickerVisible}
            mode="date"
            onConfirm={onConfirmDob}
            onCancel={() => {
              setDatepickerVisible(!isDatepickerVisible);
            }}
          />
        </InputView>

        <Button
          style={tw("m-5")}
          onPress={handleSubmit(onSubmit)}
          mode="submit"
          text={translate("common.continue")}
        />
      </Root>
    </Screen>
  );
};
