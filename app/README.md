# App

The app, or src directory looks similar to the following:

```
app
│── components
│── config
│── containers
│── i18n
├── models
├── navigation
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

## ./components

Store simple React components that mostly handles UIs and simple actions, such as buttons and text fields.

- Components that are reusable for the app and not specific to a screen.
- Provides easier mass modification to a component used around the app.

[Details - components](./components)

## ./config

Store configurations for the app that might need to be modified. Configurations that includes

- api keys or url that might be changed during development.
- acts as a settings for your app development, ex: the timing or the color of popup(flash messages)

[Details - config](./config)

## ./containers

Store React components that contains more complex and reusable hooks/functions.

- Components with important and separable functions are stored here
- Ex: search function. A lot of instances are needed but can be separated by different UIs
- Containers are exported in `containers/index.ts`

[Details - containers](./containers)

## ./i18n

This is where translations are stored. Any text that can be translated are stored here.

[Details - i18n](./i18n)

## ./models

This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

[Details](./models)

Observers are be wrapped around a React component to observe any changes to mobx store.

[Overview of mobx store](https://mobx-state-tree.js.org/intro/philosophy)

## ./navigation

This is where `react-navigation` navigators will live. The navigators are separated into 2 big stacks, auth stack and primary stack

[Details - navigation](./navigation)
**Auth stack** stores all the pre-login screens in a stack.

**Primary stack** stores the rest of the app. It contains a bigger hierarchy than auth stack. It contains a bottom tab navigator, each tab containing its own stack and is also wrapped in a drawer navigator if needed.

## ./screens

Store React components that acts a screen. A screen contains and imports other components and containers. Screens are directly linked to the navigation.

[Details - screens](./screens)

## ./services

Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

## ./theme

Here lives the theme for your application, including spacing, colors, fonts and typography.

[Details - theme](./theme)

## ./utils

This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

## ./app.tsx

This is the entry point to your app. This is where you will find the main App component which renders the rest of the application. This is also where you will specify whether you want to run the app in storybook mode.
