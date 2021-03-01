import React from "react";
import { TouchableOpacity, FlatList, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { translate } from "i18n";
import { Text, Screen, PopupInput, Image } from "components";
import { tw } from "tailwind";
import Icon from "react-native-vector-icons/FontAwesome5";
import { EditProfileProps } from "./props";
import { Root } from "./styles";
import { profileData } from "./data";

const defaultAvatar = require("assets/icons/avatar.png");

export const EditProfile = (props: EditProfileProps) => {
  const {
    userData,
    dobVisible,
    modalVisible,
    modalTitle,
    modalDefault,
    modalButtonLoading,
    onPressEdit,
    onSavePopup,
    onConfirmDob,
    onCancelPopup,
    onCancelDob
  } = props;

  const { avatar } = userData;
  return (
    <Screen>
      <Root>
        <FlatList
          data={profileData}
          ListHeaderComponent={() => (
            <View>
              <TouchableOpacity
                style={tw("items-center self-center py-10")}
                onPress={() => onPressEdit("avatar")}>
                <Image
                  style={tw("rounded-full h-20 w-20 ")}
                  source={avatar ? { uri: avatar } : defaultAvatar}
                />
                <View style={tw("pt-2")}>
                  <Text>
                    {translate("editProfileScreen.changeProfilePhoto")}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={tw("bg-gray-200 h-1")} />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={tw("bg-gray-100 h-1")} />}
          renderItem={({ item }) => {
            const { key, title } = item;
            const value = userData[key];
            return (
              <TouchableOpacity
                style={tw("p-4 flex-row justify-between")}
                onPress={() => onPressEdit(key, value)}>
                <Text>{title}</Text>
                <View style={tw("flex-row justify-between items-center")}>
                  <Text>{value}</Text>
                  <Icon style={tw("mx-2")} name="chevron-right" size={18} />
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.key}
        />

        {/* pop up input to edit profile data */}
        <PopupInput
          title={modalTitle}
          defaultValue={modalDefault}
          onSave={onSavePopup}
          visible={modalVisible}
          animationType="slide"
          onPressBackground={onCancelPopup}
          buttonLoading={modalButtonLoading}
        />

        {/* date picker modal for dob */}
        <DateTimePickerModal
          isVisible={dobVisible}
          mode="date"
          onConfirm={onConfirmDob}
          maximumDate={new Date()}
          onCancel={onCancelDob}
        />
      </Root>
    </Screen>
  );
};
