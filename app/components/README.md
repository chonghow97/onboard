# Components

Store simple React components that mostly handles UIs and simple actions, such as buttons and text fields.

- Components that are reusable for the app and not specific to a screen.
- Provides easier mass modification to a component used around the app.

## Structure

```
components
│── ComponentName
│   ├── index.tsx
│   ├── props.ts
│   └── styles.tsx
├── index.ts
└── README.md
```

Each component have their own folder, named after export name in PascalCase. Each component contains:

- `index.tsx` - exports `PascalName`, main file of each component and imports contents needed from `./props.ts` and `./styles.tsx`.
- `props.ts` - exports `PascalNameProps`, props passed to component to modify usage.
- `styles.tsx` - stores all styling related.
- other possible files, such as `types` or `data` can be added separately in the same folder
- Components are exported in `components/index.ts`

## Custom

In project's root directory, run `ignite generate component PascalName` to generate a template. After generating

- change its folder name to PascalCase
- export it in `components/index.ts`
- import by adding `import { PascalName } from "components"`
