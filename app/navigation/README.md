# Navigation

This is where `react-navigation` navigators will live.

[React Navigation](https://reactnavigation.org/docs/getting-started)

## Structure

```
navigation
├── AppNavigator
├── AuthNavigator
│── DrawerNavigator
├── RootNavigator
├── TabNavigator
├── HomeNavigator(and other navigator stacks that are in bottom tab, ProfileNavigator etc)
└── README.md
```

## Navigation Hierarchy

```
RootNavigator
├── AuthNavigator
└── AppNavigator
    └── DrawerNavigator
        └── TabNavigator
            ├── HomeNavigator
            └── ProfileNavigator
```

### RootNavigator

**Root**->App/Auth

Root of the app, stores 2 stack, App and Auth, moves between them when signing in and out.

### AuthNavigator

Root->**Auth**

Stores all the pre-login screens in a stack.

### AppNavigator

Root->**App**->Drawer->Tab->Home,Profile

Stores the rest of the app. It contains a bigger branch than auth stack. It contains a drawer navigator, wrapped around a bottom tab navigator, each tab containing its own stack.

### DrawerNavigator

Root->App->**Drawer**->Tab->Home,Profile

Creates a drawer that can be opened when signed in. Includes a tab navigator along with other screens if needed.

### TabNavigator

Root->App->Drawer->**Tab**->Home,Profile

Bottom tab bar of the app when logged in. Each tab contains its own stack of screens.

### HomeNavigator (Others)

Root->App->Drawer->Tab->**Home,Profile**

Stack of screens in each tab. These stacks contains screens in their respective tabs.

## Implementation

Add `home: undefined;` in the type list for the navigator, then add `<Stack.Screen name="home" component={HomeScreen}/>` as a child inside the stack component. Home used as an example.

- name of screen in navigation should always be camelCaseName of the screen
- screen with the same purpose can use the same component with a different name, the screen will need to be able to handle this without being repeptitive or too specific

Add `const navigation = useNavigation()`, then call `navigation.navigate("home")` to navigate to the screen.

### Pass data with navigation

Use `navigation.navigate("postDetails", { id: postId })` to pass data to the next screen. This can be used to determine what the next screen should be based on an event of the current screen.

**Note**: do not pass a data this way through multiple screens as it is easy to lose the data through any modification, data such as those can be stored in mobx-store.
