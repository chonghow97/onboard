import React from "react";
import { translate } from "i18n";
import { color } from "theme";
import { Screen, Text, TextField, Button } from "components";
import { tw } from "tailwind";
import { AccountProps } from "./props";
import { Root, InputView, ErrorTextStyle } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const SignupAccount = (props: AccountProps) => {
  const {
    onChangeEmail,
    onChangeUsername,
    handleSubmit,
    onSubmit,
    errors
  } = props;

  return (
    <Screen>
      <Root>
        <Text style={tw("text-primary text-2xl font-bold my-10")}>
          {translate("auth.signup")}
        </Text>

        <InputView>
          <Text>{translate("auth.fieldsTitle.username")}</Text>
          <TextField
            // refs={inputRef[0]}
            placeholder={translate("placeholder.username")}
            placeholderTextColor={color.textDim}
            onChangeText={(text) => onChangeUsername(text)}
            error={errors ? !!errors.username : false}
          />
          {errors?.username && (
            <Text style={ErrorTextStyle}>{translate("errors.required")}</Text>
          )}
        </InputView>

        <InputView>
          <Text>{translate("auth.fieldsTitle.email")}</Text>
          <TextField
            // ref={inputRef[3]}
            placeholder={translate("placeholder.email")}
            placeholderTextColor={color.textDim}
            onChangeText={(text) => onChangeEmail(text)}
            error={errors ? !!errors.email : false}
          />
          {errors?.email && (
            <Text style={ErrorTextStyle}>
              {translate("errors.invalidEmail")}
            </Text>
          )}
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
