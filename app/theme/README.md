# Theme

Here lives the theme for your application, including spacing, colors, fonts and typography.

## Structure

```
theme
├── color.ts
├── font.ts
└── palette.ts
```

### Color

Stores all the color schemes used in the app.

Colors are declared by its usage in terms of the whole app, ex: named by `primary`, or `text` linked to the whole app. After the name is declared, it will import color codes or names from `./palette`. Adding color to components will always import from `colors` and `color` from `palette`. This provides the option to change the whole app's color scheme easily, and possibly create multiple color schemes in apps.

**Note**: make sure not to name colors that might overlap with other. Make sure the name is if there's a specific color for a type of component needed, and there's no color with the same purpose already exist.

### Fonts

Any custom fonts are stored in `app/assets` and `font.ts` will store the name. Font family linked to `theme/font` lets developer easily install and change custom fonts to fit the project.

2 main fonts `regular` and `bold` can be used by adding `import { font } from "theme"`, then `font.regular` or `font.bold`.

[Installing custom fonts](https://blog.bam.tech/developer-news/add-a-custom-font-to-your-react-native-app) can be done by adding _.ttf or _.otf font file to `app/assets/fonts`, then run `react-native link`, then you will be able to use the font name in font family.

### Palette

Store color palettes for color.ts, makes it easier to change different shades of a color, ex: changing different shade of red that might make the app look better.
