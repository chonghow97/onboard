import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "models/index";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import * as EmailValidator from "email-validator";
import { ForgotPassword } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const ForgotPasswordScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const navigation = useNavigation();
  const { authStore } = useStores();
  const { register, setValue, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: ""
    }
  });
  // --------------------HOOKS

  useEffect(() => {
    register(
      { name: "email" },
      {
        required: true,
        validate: (value) => EmailValidator.validate(value)
      }
    );
  }, [register]);
  // --------------------FUNCTIONS

  const onPressSend = (data) => {
    authStore.update({ verificationEmail: data?.email, signupEmail: null });
    navigation.navigate("verification");
  };

  const onChangeEmail = (text) => {
    setValue("email", _.trim(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });
  };
  // --------------------RENDER
  return (
    <ForgotPassword
      onChangeEmail={onChangeEmail}
      onPressSend={onPressSend}
      handleSubmit={handleSubmit}
      errors={errors}
      watch={watch}
    />
  );
});
