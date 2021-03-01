# LavaIgnite

[![CircleCI](https://circleci.com/gh/infinitered/ignite-bowser.svg?style=svg)](https://circleci.com/gh/infinitered/ignite-bowser)

## The latest and greatest boilerplate for Infinite Red opinions

This is an extension of the boilerplate that [Infinite Red](https://infinite.red) uses as a way to test bleeding-edge changes to our React Native stack.

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Sections

- [Quick Start](#quick-start)
- [Implementations](#implementations)
- [Code Practice](#code-practice)
- [Environment variables](#environment-variables)
- [Running Storybook](#running-storybook)
- [Rename App](#rename-app)
- [Previous Boilerplates](#previous-boilerplates)
- [Premium Support](#premium-support)

## Quick Start

The Lava Ignite project's structure will look similar to this:

```
ignite-project
├── app
├── storybook
├── test
├── README.md
├── android
├── ignite
├── index.js
├── ios
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally work on to create your app.

[App structure and details](./app)

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find generators, plugins and examples to help you get started with React Native.

### ./storybook directory

This is where your stories will be registered and where the Storybook configs will live

### ./test directory

This directory will hold your Jest configs and mocks, as well as your [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) test file. This is a file that contains the snapshots of all your component storybooks.

## Implementations

Implementation of external libraries that is actively used throughout the project.

### Lodash

Lodash provides a wide range of utility functions that are used to handle arrays, numbers, objects, strings, etc can use lodash instead. Methods available such as `forEach`, `isEmpty`, `map`, `has` etc.

Add `import { get, map } from "lodash";` `map(list, () => {})` to use the methods provided by lodash.

Refer to [Lodash docs](https://lodash.com/docs) when handling data.

### Tailwind

Handles styling of components. Files include:

```
tailwind.config.js
tailwind.js
styles.json
```

**Usage**

- You can use `styles.json` as a reference for stylings terms.
- Tailwind comes with standard and common syntax. Any custom styling can be customized in `tailwind.config.js`.
- Run `yarn tw` to update `styles.json` when there are any changes in tailwind config.

Apply the stylings by using `import { tw } from "tailwind"`. For example, `tw("justify-center items-center h-full")` will return `{ justifyContent: "center", alignItems: "center", height: "100%" }`. Can also be used in styled-components by adding `${tw("justify-center items-center h-full")}`.

**Note**: do not use color literals, ex: `text-blue-50`, instead use colors in [theme/color](./app/theme), ex: `text-primary`.

**Implementation**

- Tailwind stylings are passed to `style` props in components inline
- Inline tailwind helps to show what the components look like
- Reusable styles can be added to `./styles`

**Reference**

- [tailwind-rn for simple reference](https://github.com/vadimdemedes/tailwind-rn)
- [Tailwind Docs](https://tailwindcss.com/docs)

### Styled components

Styled components creates a new React component with the stylings and a new name.

**Usage**

![image](https://user-images.githubusercontent.com/56380196/105568146-25fe2680-5d72-11eb-8dbd-a983b998ce54.png)
![image](https://user-images.githubusercontent.com/56380196/105568141-20084580-5d72-11eb-9956-7f2638995841.png)

**Implementation**

Styled components can be used for components with stylings that

- are not susceptible to change, such as the container of your screen
- does not help visualize the component
- helps when the component is named
- (or) are not supported in tailwind (ex: elevation)

**Reference**

- [styled components](https://styled-components.com/)
- [styled components for React Native](https://styled-components.com/docs/basics#react-native)

### Flash messages

Shows a popup message at the top of the app. Shows green, yellow, or red messages that will disappear after a few seconds.

**Usage**

Flash messages are usually used to make the app more responsive, it shows a message when needed to provide a response to user.

Common usage:

- error messages in input or query or mutation
- success messages that are not apparent to user, ex: checkout payment successful, user profile updated, etc

**Implementation**

Call `flash("status", "message")` to show the message. Available status are :

- "success" - green background message
- "error" - red background message
- "warning" - yellow background message

**Reference**

- [Flash Message package](https://github.com/lucasferreira/react-native-flash-message)

### Ignite Generators

Run `ignite generate <templateType> <name>` in the terminal to generate a copy of a template based on the type and name.

- Default template types: `component`, `container`, and `screen`.
- Code generated will be based on `ignite/templates/<templateType>/*`.
- Generator target directory will be `app/<templateType>s/`.

Then change the generated folder name from kebab-case to PascalCase and export it in `<templateType>s/index.ts`

[Ignite Generator more details](./ignite)

### Commits (yarn cz)

Run `git checkout -b <task>/<branch-name>`,

- `<task>` is the type of changes, usually `feat`, `fix`, `refactor`, `style`
- `<branch-name>` is the name of the task

Then after making your code changes and running `git add .`, run `yarn cz` for commits, you will be prompt multiple messages, instructions are as written, the first and 3rd message are required
![image](https://user-images.githubusercontent.com/56380196/104845675-9ee42500-5911-11eb-829b-ce779e4edd10.png)
![image](https://user-images.githubusercontent.com/56380196/104845838-79a3e680-5912-11eb-8003-b8b2494f1194.png)

After the changes are successfully commited, run `git push`.

## Code Practice

Practices that are used throughout the project for efficient or consistent coding.

PS: We enforce a consistent coding practice to make coding a more enjoyable things.
[Check out Pull Request Template here](.github/pull_request_template.md)


### Folder structure

[App structure and details](./app)

### Default Components

There are several common components such as `Button` and `TextField` that are already created can be modified to suite each projects' styling needs.

`Screen`, `Text`, `Image`, and `Video` are to be used for all instance of component.

### Colors and Fonts

Stored in `app/theme`.

**Colors** are declared by its usage in terms of the whole app, ex: named by `primary`, or `text` linked to the whole app. After the name is declared, it will import color codes or names from `./palette`. Adding color to components will always import from `colors` and `color` from `palette`. This provides the option to change the whole app's primary background easily, and possibly create color themes in apps.

**Note**: make sure not to name colors that might overlap with other. Make sure the name is if there's a specific color for a type of component needed, and there's no color with the same purpose already exist.

**Fonts** are similar to color but only needed for text. Any custom fonts are stored in `app/assets` and `font.ts` will store the name. Font family linked to `theme/font` lets developer easily install and change custom fonts to fit the project.

[Installing custom fonts](https://blog.bam.tech/developer-news/add-a-custom-font-to-your-react-native-app) can be done by adding _.ttf or _.otf font file to `app/assets/fonts`, then run `react-native link`, then you will be able to use the font name in font family.

### Casing

**Component** names for folder and export of screens, components, and containers are in `PascalCase`, this includes screen's stack folder and stack name.

**Variables** such as data and function are named in camelCase.

### Function

Separated into methods and events.

**Methods** runs a specific purpose, they are named in verb and exactly what the function does.

**Events** are when something happens, usually are props from components when an event is triggered in the app. Events are usually named `<on><Action><Target>`.

In this case, methods of screens are not passed to its component, events are declared in `index` and passed as props to `component`. `setState`s, `navigate` are also considered methods.

You can also refer to other packages' components for example, such as [react-native ScrollView](https://reactnative.dev/docs/scrollview), in which the only functions in props starts with `on`, as `on` is generally used for event functions and a separation from methods.

### props

**Passing props to render** should only include what the component need, this applies for any React components, this helps make data and functions easier to track.

Instances

- passing event functions to other event props to override, Ex: pass `onPress` to `onPress` instead of passing `setState`
- passing data needed from render, Ex: pass `posts` from `data.getPosts.items` instead of passing `data` from `useQuery`

**Destructure Props** `const { visible, onPress, loading, name } = props` can be done to make the code tidier and more flexible.

### Variables

**Destructuring**

- `const { visible, onPress, loading, name } = props` `<Text>{name}</Text>` instead of `<Text>{props.name}</Text>` makes it easier to track all the props inside a component.
- `const { avatar, name: userName } = item` `<Text>{userName}</Text>` lets you change the local variable name.
- `const { visible = false } = props` lets you set a default value.

## Environment variables

Stores the environment variables such as api keys in `.env`. [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) allows multiple env to be declared and reads the env based on current environment.

In the app's root directory, create a file named

- `.env.development` to store env to be read when your app is in development.
- `.env.production` to store env to be read when your app is in release.

Add your api in the file, example:

```
GOOGLE_MAP_API=a12345
BACKEND_URL=http://localhost:3000/graphql
```

Export your api in env.d.ts, and import the values with `import { GOOGLE_MAP_API } from "@env"`, values in `.env.development` and `.env.production` will replace `.env` depending on the environment

Issues:

- cache not reset when changing environment, https://github.com/goatandsheep/react-native-dotenv#caveats

## Running Storybook

From the command line in your generated app's root directory, enter `yarn run storybook`
This starts up the storybook server.

In `index.js`, change `SHOW_STORYBOOK` to `true` and reload the app.
For Visual Studio Code users, there is a handy extension that makes it easy to load Storybook use cases into a running emulator via tapping on items in the editor sidebar. Install the `React Native Storybook` extension by `Orta`, hit `cmd + shift + P` and select "Reconnect Storybook to VSCode". Expand the STORYBOOK section in the sidebar to see all use cases for components that have `.story.tsx` files in their directories.

## Rename App

Install React Native Rename globally

With **Yarn**:

```
$ yarn global add react-native-rename
```

With **npm**:

```
$ npm install react-native-rename -g
```

Rename the app:

```
$ yarn rename "newName"
```

Rename the app together with Bundle Identifier(android only, for iOS,please use Xcode):

```
$ yarn rename "newName" -b "newBundleIdentifier"
```


## Previous Boilerplates

- [2017 aka Andross](https://github.com/infinitered/ignite-andross)
- [2016 aka Ignite 1.0](https://github.com/infinitered/ignite-ir-boilerplate-2016)

## Premium Support

[Ignite CLI](https://infinite.red/ignite), [Ignite Andross](https://github.com/infinitered/ignite-andross), and [Ignite Bowser](https://github.com/infinitered/ignite-bowser), as open source projects, are free to use and always will be. [Infinite Red](https://infinite.red/) offers premium Ignite support and general mobile app design/development services. Email us at [hello@infinite.red](mailto:hello@infinite.red) to get in touch with us for more details.
