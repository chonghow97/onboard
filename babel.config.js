module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {}
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true
      }
    ],
    [
      "module-resolver",
      {
        cwd: "./",
        root: ["./app"],
        alias: {
          assets: "./assets",
          components: "./app/components",
          containers: "./app/containers",
          i18n: "./app/i18n",
          config: "./app/config",
          utils: "./app/utils",
          models: "./app/models",
          screens: "./app/screens",
          theme: "./app/theme",
          graphqloperations: "./graphql/operations",
          tailwind: "./tailwind.js"
        },
        extensions: [".ts", ".tsx"]
      }
    ]
  ]
};
