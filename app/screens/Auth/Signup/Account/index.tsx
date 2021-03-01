import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { useStores } from "models/index";
import * as EmailValidator from "email-validator";
import { SignupAccount } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const SignupAccountScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const navigation = useNavigation();
  const { authStore } = useStores();

  // --------------------HOOKS

  const { register, setValue, handleSubmit, errors } = useForm({
    defaultValues: {
      email: "",
      username: ""
    }
  });

  useEffect(() => {
    register({ name: "username" }, { required: true });
    register(
      { name: "email" },
      {
        required: true,
        validate: (value) => EmailValidator.validate(value)
      }
    );
  }, [register]);

  // --------------------FUNCTIONS
  const onSubmit = (data) => {
    const { username, email } = data;

    const newUser = {
      username,
      signupEmail: email
    };

    authStore.update(newUser);
    navigation.navigate("signupProfile");
  };

  const onChangeUsername = (text) => {
    setValue("username", _.trim(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });
  };

  const onChangeEmail = (text) => {
    setValue("email", _.trim(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });
  };

  // --------------------RENDER
  return (
    <SignupAccount
      onChangeEmail={onChangeEmail}
      onChangeUsername={onChangeUsername}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
});
