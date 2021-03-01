import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useStores } from "models/index";
import _ from "lodash";
import { SignupPassword } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const SignupPasswordScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const navigation = useNavigation();
  const { authStore } = useStores();
  const formType = authStore.verificationEmail ? "resetPassword" : "signup";
  // --------------------HOOKS
  const { register, setValue, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: ""
    }
  });

  useEffect(() => {
    register({ name: "password" }, { required: true });
    register(
      { name: "confirmPassword" },
      {
        required: true,
        validate: (value) => watch("password") === value
      }
    );
  }, [register]);

  // --------------------FUNCTIONS

  const onSubmit = (data) => {
    if (formType === "resetPassword") {
      authStore.resetAuthData();
      navigation.navigate("login");
    } else {
      navigation.navigate("verification");
    }
  };

  const onChangePassword = (text) => {
    setValue("password", _.trim(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });
  };

  const onChangeConfirmPassword = (text) => {
    setValue("confirmPassword", _.trim(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });
  };
  // --------------------RENDER
  return (
    <SignupPassword
      formType={formType}
      onChangePassword={onChangePassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
      watch={watch}
    />
  );
});
