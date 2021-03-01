# Config

Store configurations for the app that might need to be modified. Configurations that includes

- api keys or url that might be changed during development.
- acts as a settings for your app development, ex: the timing or the color of popup(flash messages)

## Structure

```
config
│── endpoint.ts
├── env.js
├── flash.tsx
└── README.md
```

### endpoint

Store api keys, backend urls, or other endpoints

### env

Generates the env module used

[Details - components](../../#environment-variables)

### flash

Generates and configures the flash messages that appears throughout the app
[Flash Message package](https://github.com/lucasferreira/react-native-flash-message)
