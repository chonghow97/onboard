# Containers

Store React components that contains more complex and reusable hooks/functions.

- Components with important and separable functions are stored here
- Ex: search function. A lot of instances are needed but can be separated by different UIs

## Structure

```
containers
│── ContainerName
│   ├── hooks.tsx
│   ├── index.tsx
│   ├── props.ts
│   └── styles.tsx
├── index.ts
└── README.md
```

Each container have their own folder, named after export name in PascalCase. Each container contains:

- `hooks.tsx` - stores more complex functions that can be separated by its UI and exported.
- `index.tsx` - exports `PascalName`, main export file of each container and imports contents needed from `./props.ts` and `./styles.tsx`.
- `props.ts` - exports `PascalNameProps`, props passed to container to modify usage.
- `styles.tsx` - stores all styling related.
- other possible files, such as `types` or `data` can be added separately in the same folder
- Containers are exported in `containers/index.ts`

## Custom

In project's root directory, run `ignite generate container PascalName` to generate a template. After generating

- change its folder name to PascalCase
- export it in `containers/index.ts`
- import by adding `import { PascalName } from "containers"`
