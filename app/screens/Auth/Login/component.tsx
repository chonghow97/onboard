import React from "react";
import { TouchableOpacity } from "react-native";
import { translate } from "i18n";
import { Button, Screen, Text, TextField } from "components";
import { color } from "theme";
import { tw } from "tailwind";
import { LoginProps } from "./props";
import { Container, InputContainer, InputView, textStyle } from "./styles";

export const Login = (props: LoginProps) => {
  const {
    buttonLoading,
    onChangeEmail,
    onChangePassword,
    onLogin,
    onPressSignup,
    onPressForgetPassword
  } = props;

  return (
    <Screen scrollable>
      <Container>
        <Text style={tw("text-primary font-bold text-4xl m-14")}>
          LavaX Ignite
        </Text>
        <InputView>
          <Text style={textStyle}>{translate("auth.fieldsTitle.email")}</Text>

          <TextField
            style={InputContainer}
            placeholder={translate("placeholder.email")}
            placeholderTextColor={color.textDim}
            onChangeText={onChangeEmail}
          />
        </InputView>
        <InputView>
          <Text style={textStyle}>
            {translate("auth.fieldsTitle.password")}
          </Text>
          <TextField
            secureTextEntry
            style={InputContainer}
            placeholder={translate("placeholder.password")}
            placeholderTextColor={color.textDim}
            onChangeText={onChangePassword}
          />
        </InputView>
        <TouchableOpacity onPress={onPressForgetPassword}>
          <Text>{`${translate("auth.forgotPassword")}?`}</Text>
        </TouchableOpacity>
        <Button
          style={tw("mb-3 mt-10")}
          text={translate("auth.login")}
          onPress={onLogin}
          loading={buttonLoading}
        />
        <TouchableOpacity onPress={onPressSignup}>
          <Text>{translate("auth.signup")}</Text>
        </TouchableOpacity>
      </Container>
    </Screen>
  );
};
