# Ignite

## Ignite Generators

Run `ignite generate <templateType> <name>` in the terminal to generate a copy of a template based on the type and name.

- Default template types: `component`, `container`, and `screen`.
- Code generated will be based on `ignite/templates/<templateType>/*`.
- Generator target directory will be `app/<templateType>s/`.

### Usage

#### Run command

In the project root directory, run

```
ignite generate component Button
```

A folder with the name `button` will be generated in `components`, containing `index`, `props`, and `styles`.

```
ignite generate container SearchBar
```

A folder with the name `search-bar` will be generated in `containers`, containing `index`, `hooks`, `props`, and `styles`.

```
ignite generate screen Home
```

A folder with the name `home` will be generated in `screens`, containing `index`, `component`, `props`, and `styles`.

#### Exporting files

For components, containers, and screens, after running the command, change `<name>` to PascalCase and add `export * from "./<name>";` in `app/<templateType>/index.ts`.

### Generator References

- [Ignite cli generator src](https://github.com/infinitered/ignite/blob/master/src/commands/generate.ts)
- [Generator docs](https://github.com/infinitered/ignite/blob/master/docs/Generators.md)
- [Gluegun](https://infinitered.github.io/gluegun/#/)
