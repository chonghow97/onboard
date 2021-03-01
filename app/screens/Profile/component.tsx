import React from "react";
import { Button, Image, Screen, Text } from "components";
import { translate } from "i18n";
import { tw } from "tailwind";
import { ProfileProps } from "./props";
import { Root } from "./styles";

// Handles rendering screen, receive data and methods needed from index as props
export const Profile = (props: ProfileProps) => {
  const { userData, onPressEditProfile } = props;
  return (
    <Screen scrollable>
      <Root>
        <Image
          style={tw("rounded-3xl m-5")}
          size={80}
          source={{ uri: userData.avatar }}
        />
        <Text style={tw("mb-1 font-bold")}>{userData.username}</Text>
        <Text style={tw("mb-4 text-textDim")}>{userData.email}</Text>

        <Button
          onPress={onPressEditProfile}
          text={translate("app.profile.editProfile")}
          style={tw("w-8/12 p-3 rounded-lg")}
          textStyle={tw("text-sm")}
        />
      </Root>
    </Screen>
  );
};
