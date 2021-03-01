# Models

This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

[Overview of mobx store](https://mobx-state-tree.js.org/intro/philosophy)

## Structure

### Auth Model

Stores info related to authentication, signup data, email for otp, login, as well as authenticate current logged in user.

**Actions**

- `update` - Update data in auth store
- `signIn` - Sign in user, updates accessToken, userId and UsersModel
- `logout` - clears auth store
- `updateUser` - update signed in user data, updates UsersModel
- `isSignedIn` - check if user is signed in
- `currentUser` - get the current signed in user data

### User Model

User entity.

### Users Model

Stores User entities, able to store multiple user info when needed.

**Actions**

- `saveUsers` - used to update UsersModel

## Usage

Observers are be wrapped around a React component to observe any changes to mobx store. Variables that might be reused across screens are stored in mobx-store. Actions that modify the store can also be created.

## Implementation

Add `const { authStore } = useStores()` and you can access to its attributes, and `const { otp, accessToken, email } = authStore` to destructure.

Example(before destructure):

- `authStore.userId` to retreive user id
- `authStore.update({ otp: "356433" })` to update otp
- `authStore.updateUser({ email: "temp@lava.co" })` to update current user's email
- `authStore.currentUser` to get current user's data
