import React from "react";
import CodeInput from "react-native-confirmation-code-input";
import { translate } from "i18n";
import { TouchableOpacity, View } from "react-native";
import { Button, Screen, Text } from "components";
import { tw } from "tailwind";
import { VerificationProps } from "./props";
import { Root } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Verification = (props: VerificationProps) => {
  const {
    email,
    onChangeCode,
    onPressSend,
    onPressResend,
    otpCounter,
    buttonDisabled
  } = props;

  return (
    <Screen>
      <Root>
        <Text style={tw("text-primary text-2xl font-bold my-10")}>
          {translate("auth.enterCode")}
        </Text>
        <Text style={tw("text-textDim text-xs")}>
          {`${translate("auth.codeHint")} ${email}`}
        </Text>
        <CodeInput
          codeLength={6}
          keyboardType="numeric"
          containerStyle={tw("items-center self-center justify-center w-24")}
          codeInputStyle={tw(
            "border-0 border-b-2 text-2xl m-1 opacity-100 w-8"
          )}
          activeColor="rgba(128 ,128, 128, 0.7)"
          inactiveColor="rgba(128 ,128, 128, 0.3)"
          onFulfill={onChangeCode}
        />

        <Button
          style={tw("m-5")}
          onPress={onPressSend}
          disabled={buttonDisabled}
          text={translate("auth.verify")}
          mode="submit"
        />

        <View style={tw("flex-row justify-center")}>
          <Text style={tw("text-textDim text-xs")}>
            {`${translate("auth.codeNotReceived")} `}
          </Text>
          <TouchableOpacity onPress={onPressResend} disabled={otpCounter > 0}>
            <Text style={tw("text-primary")}>
              {`${translate("auth.resend")}${
                otpCounter > 0 && `(${otpCounter})`
              }`}
            </Text>
          </TouchableOpacity>
        </View>
      </Root>
    </Screen>
  );
};
