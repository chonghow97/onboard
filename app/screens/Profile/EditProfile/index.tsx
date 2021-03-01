import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "models";
import { useNavigation } from "@react-navigation/native";
import { useUserUpdateMutation } from "graphqloperations";
import { set } from "lodash";
import moment from "moment";
import flash from "config/flash";
import { translate } from "i18n";
import { EditProfile } from "./component";

export const EditProfileScreen = observer(() => {
  // --------------------STATES & VARIABLES
  const { authStore } = useStores();

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [dobVisible, setDobVisible] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalDefault, setModalDefault] = useState<string>("");
  const [modalField, setModalField] = useState<string>("");

  const userData = authStore.currentUser || {};
  const { phoneCode, phoneNumber } = userData;
  // combine phone code with phone number for render
  if (phoneCode && phoneNumber)
    set(userData, "phone", `+${phoneCode}******${phoneNumber.slice(-3)}`);

  // --------------------HOOKS
  const [
    userUpdateMutation,
    { loading: updateLoading }
  ] = useUserUpdateMutation();

  const modalButtonLoading = updateLoading;

  // --------------------FUNCTIONS
  const onPressEdit = (key: string, defaultvalue?: string) => {
    if (key === "dateOfBirth") setDobVisible(true);
    else if (key === "avatar") {
      // TODO: change profile pic
    } else if (key === "language") {
      // TODO: handle change language
    } else if (key === "password") {
      // TODO: Navigate to changing password
    } else {
      setModalDefault(defaultvalue);
      setModalField(key);
      setModalTitle(translate(`editProfileScreen.${key}`));
      setModalVisible(true);
    }
  };

  const onSavePopup = async (input: string) => {
    const key = modalField;
    const updateInput = { id: userData.id };
    set(updateInput, key, input);

    try {
      await userUpdateMutation({ variables: { input: updateInput } });

      const authStoreData = set({}, key, input);
      authStore.updateUser(authStoreData);

      flash("success", translate("editProfileScreen.updated"));
    } catch (error) {
      flash("error", error.message);
    }

    setModalVisible(false);
  };

  const onConfirmDob = (input: Date) => {
    userUpdateMutation({
      variables: {
        input: {
          id: userData.id,
          dateOfBirth: moment(input).format("DD/MM/YYYY")
        }
      }
    })
      .then(() => {
        authStore.updateUser({
          dateOfBirth: moment(input).format("DD/MM/YYYY")
        });
        flash("success", translate("editProfileScreen.updated"));
      })
      .catch((error) => {
        flash("error", error.message);
      });

    setDobVisible(false);
  };

  const onCancelPopup = () => setModalVisible(false);
  const onCancelDob = () => setDobVisible(false);

  // --------------------VIEW
  return (
    <EditProfile
      userData={userData}
      dobVisible={dobVisible}
      modalVisible={modalVisible}
      modalTitle={modalTitle}
      modalDefault={modalDefault}
      modalButtonLoading={modalButtonLoading}
      onPressEdit={onPressEdit}
      onSavePopup={onSavePopup}
      onConfirmDob={onConfirmDob}
      onCancelPopup={onCancelPopup}
      onCancelDob={onCancelDob}
    />
  );
});
