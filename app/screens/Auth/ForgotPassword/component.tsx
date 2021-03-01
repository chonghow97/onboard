import React from "react";
import { Button, Text, TextField } from "components";
import { translate } from "i18n";
import { color } from "theme";
import { tw } from "tailwind";
import { View } from "react-native";
import { ForgotPasswordProps } from "./props";
import { Root, TitleStyle } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const ForgotPassword = (props: ForgotPasswordProps) => {
  const { onChangeEmail, onPressSend, handleSubmit, watch, errors } = props;

  return (
    <Root>
      <Text style={TitleStyle}>{translate("auth.forgetPassword")}</Text>
      <Text style={TitleStyle}>{translate("auth.enterEmail")}</Text>
      <Text style={tw("text-textDim text-xs")}>
        {translate("auth.emailHint")}
      </Text>
      <View style={tw("justify-center p-2\\.5 w-10/12")}>
        <TextField
          keyboardType="email-address"
          placeholder={translate("placeholder.email")}
          placeholderTextColor={color.textDim}
          onChangeText={onChangeEmail}
          error={errors ? !!errors.email : false}
        />
        {errors?.email && (
          <Text style={tw("text-error text-xs")}>
            {translate("errors.invalidEmail")}
          </Text>
        )}
      </View>

      <Button
        style={tw("m-5")}
        mode="submit"
        onPress={handleSubmit(onPressSend)}
        text={translate("auth.send")}
        disabled={watch("email") === ""}
      />
    </Root>
  );
};
