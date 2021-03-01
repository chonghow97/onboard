# i18n

This is where translations are stored. Any text that can be translated are stored here.

## Usage

Any text that can be translated will use `translate("")`. All the text in the app can be easily translated once other languages are populated with the json structure.

## Implementation

- add `import { translate } from "i18n";`
- call `translate("path.path.text")`, ex: `translate("common.back")`
- `translate` will return the string from the path and the current i18n laguange
- ex: `translate("common.back")` will return `"Back"`
- text can be refered and populated in the respective `.json` file for each language
