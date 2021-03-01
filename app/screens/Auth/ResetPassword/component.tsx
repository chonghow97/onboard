import React from "react";
import { Screen, Button, TextField, Text } from "components";
import { color } from "theme";
import { tw } from "tailwind";
import { translate } from "i18n";
import { ResetPasswordProps } from "./props";
import { Root, InputView, ErrorTextStyle } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const ResetPassword = (props: ResetPasswordProps) => {
  const {
    onChangePassword,
    onChangeConfirmPassword,
    handleSubmit,
    onSubmit,
    watch,
    errors
  } = props;

  return (
    <Screen>
      <Root>
        <Text style={tw("text-primary text-lg font-bold my-3 mx-1")}>
          {translate("auth.resetPassword")}
        </Text>
        <InputView>
          <Text>{translate("auth.fieldsTitle.newPassword")}</Text>
          <TextField
            secureTextEntry
            placeholder={translate("placeholder.newPassword")}
            placeholderTextColor={color.textDim}
            onChangeText={onChangePassword}
            error={errors ? !!errors.password : false}
          />
          {errors?.password && (
            <Text style={ErrorTextStyle}>{translate("errors.required")}</Text>
          )}
        </InputView>

        <InputView>
          <Text>{translate("auth.fieldsTitle.confirmNewPassword")}</Text>
          <TextField
            secureTextEntry
            placeholder={translate("placeholder.confirmPassword")}
            placeholderTextColor={color.textDim}
            onChangeText={onChangeConfirmPassword}
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
          onPress={handleSubmit(onSubmit)}
          text={translate("auth.send")}
          disabled={watch("password") !== watch("confirmPassword")}
        />
      </Root>
    </Screen>
  );
};
