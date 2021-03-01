import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import _ from "lodash";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useStores } from "models/index";
import { SignupProfile } from "./component";

// Handles data and methods needed in render and pass it to component.tsx
export const SignupProfileScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const navigation = useNavigation();
  const { authStore } = useStores();

  // --------------------HOOKS

  const { register, setValue, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      countryCode: "MY",
      phoneCode: "60",
      dob: moment(new Date()).format("DD/MM/YYYY")
    }
  });

  useEffect(() => {
    register({ name: "firstName" }, { required: true });
    register({ name: "lastName" }, { required: true });
    register(
      { name: "phoneNumber" },
      {
        required: true,
        validate: (value) =>
          parsePhoneNumberFromString(
            `+${watch("phoneCode")}${value}`
          )?.isValid()
      }
    );
    register({ name: "countryCode" }, { required: true });
    register({ name: "phoneCode" }, { required: true });
    register({ name: "dob" }, { required: true });
  }, [register]);

  // --------------------FUNCTIONS
  const onSubmit = (data) => {
    const { firstName, lastName, phoneCode, phoneNumber, dob } = data;

    const newUser = {
      firstName,
      lastName,
      dob,
      phoneCode,
      phoneNumber
    };

    authStore.update(newUser);
    navigation.navigate("signupPassword");
  };

  const onChangeFirstname = (text) =>
    setValue("firstName", _.trimStart(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });

  const onChangeLastname = (text) =>
    setValue("lastName", _.trimStart(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });

  const onChangeCountryCode = (country) => {
    const { cca2: countryCode } = country || {};
    const phoneCode = country.callingCode[0];

    setValue("countryCode", countryCode, {
      shouldDirty: true
    });
    setValue("phoneCode", phoneCode, {
      shouldDirty: true
    });
  };

  const onChangePhoneNumber = (text) =>
    setValue("phoneNumber", _.trim(text).replace(/\s+/g, " "), {
      shouldValidate: true,
      shouldDirty: true
    });

  const onConfirmDob = (date) => {
    setValue("dob", moment(date).format("DD/MM/YYYY"), {
      shouldValidate: true,
      shouldDirty: true
    });
  };
  // --------------------RENDER
  return (
    <SignupProfile
      onChangeFirstname={onChangeFirstname}
      onChangeLastname={onChangeLastname}
      onChangeCountryCode={onChangeCountryCode}
      onChangePhoneNumber={onChangePhoneNumber}
      onConfirmDob={onConfirmDob}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
      watch={watch}
    />
  );
});
