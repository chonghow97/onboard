import {
  applySnapshot,
  getParent,
  Instance,
  SnapshotOut,
  types
} from "mobx-state-tree";

/**
 * Auth model to hold data such as accesstoken and userid.
 */
/* eslint-disable no-param-reassign */
export const AuthModel = types
  .model("Auth")
  .props({
    status: types.optional(
      types.enumeration(["pending", "done", "error"]),
      "done"
    ),
    expiresIn: types.maybeNull(types.number),
    accessToken: types.maybeNull(types.string),
    userId: types.maybeNull(types.string),
    verificationEmail: types.maybeNull(types.string),
    signupEmail: types.maybeNull(types.string),
    username: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    firstName: types.maybeNull(types.string),
    lastName: types.maybeNull(types.string),
    phoneCode: types.maybeNull(types.string),
    phoneNumber: types.maybeNull(types.string),
    dateOfBirth: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    otp: types.maybeNull(types.string),
    otpId: types.maybeNull(types.string),
    otpToken: types.maybeNull(types.string)
  })
  .actions((self) => ({
    update: (data) => {
      self = Object.assign(self, data);
    }
  }))
  .actions((self) => ({
    // TODO: change to use another store, example: metaStore
    updateStatus: (status) => {
      self.status = status;
    },
    updateUser: (updateData) => {
      // update users store
      const { usersStore, authStore } = getParent(self);
      const user = authStore.currentUser;
      usersStore.saveUsers([{ ...user, ...updateData }]);
    },
    signIn: (userSignIndata) => {
      const { expiresIn, accessToken, user } = userSignIndata;
      // update users store
      const { usersStore } = getParent(self);
      usersStore.saveUsers([user]);
      self.update({ expiresIn, accessToken, userId: user.id });
    },
    logout: () => {
      applySnapshot(self, {});
    },
    resetAuthData() {
      self.verificationEmail = null;
      self.signupEmail = null;
      self.username = null;
      self.email = null;
      self.password = null;
      self.firstName = null;
      self.lastName = null;
      self.phoneCode = null;
      self.phoneNumber = null;
      self.dateOfBirth = null;
      self.otp = null;
      self.otpId = null;
      self.otpToken = null;
    }
  }))
  .views((self) => ({
    get isSignedIn() {
      return !!self.accessToken;
    },
    get currentUser() {
      const { usersStore } = getParent(self);
      const user = usersStore?.data?.filter((x) => x.id === self.userId);
      return user ? user[0] : null;
    }
  })); // eslint-disable-line @typescript-eslint/no-unused-vars

/* eslint-enable no-param-reassign */
type AuthType = Instance<typeof AuthModel>;
export interface Auth extends AuthType {}
type AuthSnapshotType = SnapshotOut<typeof AuthModel>;
export interface AuthSnapshot extends AuthSnapshotType {}
