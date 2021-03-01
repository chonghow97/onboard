import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { AuthModel } from "models/auth/auth";
import { UsersModel } from "models/users/users";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
    authStore: types.optional(AuthModel, {}),
    usersStore: types.optional(UsersModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
