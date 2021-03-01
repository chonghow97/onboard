import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { Profile } from "./component";
// Handles data and methods needed in render and pass it to component.tsx
export const ProfileScreen = observer(() => {
  // --------------------STATES & VARIABLES

  const navigation = useNavigation();
  const userData = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "Verified",
    role: "User",
    email: "johnDoe@mail.com",
    username: "John Doe",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: new Date(),
    phoneNumber: "123456789",
    phoneCode: "60",
    avatar: "https://fakeimg.pl/300/"
  };
  // --------------------HOOKS

  // --------------------FUNCTIONS
  const onPressEditProfile = () => {
    navigation.navigate("editProfile");
  };
  // --------------------RENDER
  return (
    <Profile userData={userData} onPressEditProfile={onPressEditProfile} />
  );
});
