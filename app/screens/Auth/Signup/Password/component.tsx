import React from "react";
import { Screen, Button, TextField, Text } from "components";
import { color } from "theme";
import { translate } from "i18n";
import { tw } from "tailwind";
import { PasswordProps } from "./props";
import { Root, InputView, ErrorTextStyle } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const SignupPassword = (props: PasswordProps) => {
  const {
    formType,
    onChangePassword,
    onChangeConfirmPassword,
    handleSubmit,
    onSubmit,
    watch,
    errors
  } = props;

  const title =
    formType === "resetPassword"
      ? translate("auth.resetPassword")
      : translate("auth.signup");

  const buttonText =
    formType === "resetPassword"
      ? translate("common.submit")
      : translate("auth.signup");

  return (
    <Screen>
      <Root>
        <Text style={tw("text-primary text-2xl font-bold my-10")}>{title}</Text>
        <InputView>
          <Text>{translate("auth.fieldsTitle.password")}</Text>
          <TextField
            secureTextEntry
            placeholder={translate("placeholder.newPassword")}
            placeholderTextColor={color.textDim}
            onChangeText={(text) => onChangePassword(text)}
            error={errors ? !!errors.password : false}
          />
          {errors?.password && (
            <Text style={ErrorTextStyle}>{translate("errors.required")}</Text>
          )}
        </InputView>

        <InputView>
          <Text>{translate("auth.fieldsTitle.confrimPassword")}</Text>
          <TextField
            secureTextEntry
            placeholder={translate("placeholder.confirmPassword")}
            placeholderTextColor={color.textDim}
            onChangeText={(text) => onChangeConfirmPassword(text)}
            error={errors ? !!errors.confirmPassword : false}
          />
          {errors?.confirmPassword && (
            <Text style={ErrorTextStyle}>
              {translate("errors.passwordNotSame")}
            </Text>
          )}
        </InputView>

        <Button
          mode="submit"
          style={tw("m-5")}
          onPress={handleSubmit(onSubmit)}
          text={buttonText}
          disabled={watch("password") !== watch("confirmPassword")}
        />
      </Root>
    </Screen>
  );
};
