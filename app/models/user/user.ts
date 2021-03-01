import { Instance, SnapshotOut, types } from "mobx-state-tree";

/**
 * Single User model
 */
export const UserModel = types
  .model("User")
  .props({
    // some example of data, change to suit yours later
    avatar: types.maybeNull(types.string),
    id: types.string,
    email: types.string,
    username: types.string,
    dateOfBirth: types.string,
    firstName: types.string,
    lastName: types.string,
    phoneCode: types.string,
    phoneNumber: types.string
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})); // eslint-disable-line @typescript-eslint/no-unused-vars

type UserType = Instance<typeof UserModel>;
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>;
export interface UserSnapshot extends UserSnapshotType {}
