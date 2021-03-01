import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { useUserSignInMutation } from "graphqloperations";
import { useStores } from "models";
import flash from "config/flash";
import { translate } from "i18n";
import { Login } from "./component";

export const LoginScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const { authStore } = useStores();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --------------------HOOKS
  const loginData = { email, password };
  const [
    userSignInMutation,
    { loading: signInLoading, error }
  ] = useUserSignInMutation({
    variables: {
      input: loginData
    }
  });
  const buttonLoading = signInLoading;

  // update status of query when signin
  useEffect(() => {
    // TODO: graphql error handling ?
    let status = buttonLoading ? "pending" : "done";
    if (error) {
      status = "error";
    }
    authStore.updateStatus(status);
  }, [buttonLoading, error]);

  // --------------------FUNCTIONS
  const onChangeEmail = (text?: string) => setEmail(text);
  const onChangePassword = (text?: string) => setPassword(text);

  const onLogin = () => {
    userSignInMutation()
      .then((result) => {
        authStore.signIn(result.data.userSignIn);
      })
      .catch(() => flash("error", translate("errors.login")));
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "appStack"
        }
      ]
    });
  };

  const onPressSignup = () => {
    navigation.navigate("signupAccount");
  };

  const onPressForgetPassword = () => {
    navigation.navigate("forgotPassword");
  };
  // --------------------VIEW
  return (
    <Login
      buttonLoading={buttonLoading}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onLogin={onLogin}
      onPressSignup={onPressSignup}
      onPressForgetPassword={onPressForgetPassword}
    />
  );
});
