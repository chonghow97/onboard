import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UserModel, User, UserSnapshot } from "models/user/user";

/**
 * Users model to hold array of model
 */
export const UsersModel = types
  .model("Users")
  .props({
    data: types.optional(types.array(UserModel), [])
  })
  .actions((self) => ({
    saveUsers: (userSnapshots: UserSnapshot[]) => {
      const userModels: User[] = userSnapshots.map((c) => UserModel.create(c)); // create model instances from the plain objects
      self.data.replace(userModels); // Replace the existing data with the new data
    }
  })); // eslint-disable-line @typescript-eslint/no-unused-vars

type UsersType = Instance<typeof UsersModel>;
export interface Users extends UsersType {}
type UsersSnapshotType = SnapshotOut<typeof UsersModel>;
export interface UsersSnapshot extends UsersSnapshotType {}
