import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { useStores } from "models/index";
import { useNavigation } from "@react-navigation/native";
import { Verification } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const VerificationScreen = observer(() => {
  // --------------------STATES & VARIABLES

  const { register, setValue, watch } = useForm();
  const [otpCounter, setOtpCounter] = useState<number>(0);
  const buttonDisabled = _.size(watch("code")) !== 6;
  const { authStore } = useStores();
  const navigation = useNavigation();
  const { signupEmail } = authStore;
  const { verificationEmail } = authStore;
  // --------------------HOOKS

  useEffect(() => {
    register({ name: "code" }, { required: true, minLength: 6 });
  }, [register]);

  useEffect(() => {
    if (otpCounter > 0) setTimeout(() => setOtpCounter(otpCounter - 1), 1000);
  }, [otpCounter]);
  // --------------------FUNCTIONS
  const onChangeCode = (text) => setValue("code", text, { shouldDirty: true });

  const onPressSend = () => {
    if (authStore.signupEmail) {
      authStore.resetAuthData();
      navigation.reset({
        index: 0,
        routes: [{ name: "authStack" }]
      });
    } else if (authStore.verificationEmail) {
      navigation.navigate("signupPassword");
    }
  };

  const onPressResend = () => {
    /**
     * handle resend
     */
    setOtpCounter(60);
  };

  // --------------------RENDER
  return (
    <Verification
      email={signupEmail || verificationEmail}
      onPressSend={onPressSend}
      onChangeCode={onChangeCode}
      onPressResend={onPressResend}
      otpCounter={otpCounter}
      buttonDisabled={buttonDisabled}
    />
  );
});
