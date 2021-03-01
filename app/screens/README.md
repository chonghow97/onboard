# Screens

Store React components that acts a screen. A screen contains and imports other components and containers. Screens are directly linked to the navigation.

## Structure

```
screens
│── StackName
│   └── ScreenName
│       ├── index.tsx
│       ├── props.ts
│       └── styles.tsx
├── index.ts
└── README.md
```

Each screen have their own folder, named in PascalCase, exported as PascalNameScreen. They are stored inside their parent stack in navigation, ex: `Auth/Login` or `Profile/Settings`. Each screen contains:

- `component.tsx` - exports `PascalName`, handles rendering the screen. Receives data needed from `./index.tsx`. Imports `./props.ts` and `./styles.tsx`
- `index.tsx` - exports `PascalNameScreen`, main export file of each screen, imports `./component.tsx` and pass props needed from render.
- `props.ts` - exports `PascalNameProps`, props passed to screen's component to render data.
- `styles.tsx` - stores all styling related for `./component.tsx`.
- specific components can also be separated into another folder in the same directory
- other possible files, such as `types` or `data` can be added separately in the same directory
- Screens are exported in `screens/index.ts`

## Custom

In project's root directory, run `ignite generate screen PascalName` to generate a template. After generating

- change its folder name to PascalCase
- move to the navigation stack containing the screen
- export it in `screens/index.ts`
- import by adding `import { PascalNameScreen } from "screens"`
- add the screen to [navigation](../navigation)
- use `navigation.navigate("camelCaseName")` to navigate to the screen
