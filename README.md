### features
This starter contains has the following features:

**Tailwind CSS** : Style our components using [twin.macro](https://github.com/ben-rogerson/twin.macro) to add Tailwind classes to your project.
**Emotion** : Best-in-class CSS-in-JS support with Emotion. Write your own custom styled components with Emotion or use twin.macro inside your styled components to add Tailwind CSS classes alongside your custom styling.
**PostCSS** : Use the flexibility of PostCSS to extend Tailwind's CSS or write your own CSS.


### CSS Prop to inline Tailwind Classes

```js
import { css } from "@emotion/react"
import tw from "twin.macro"

export default () => (
  <div
    css={css`
      ${tw`flex items-center justify-between px-4 py-3`}
      color:red
    `}
  >
    <h1>Hello, world!</h1>
    <h2>I'm a flex item too!</h2>
  </div>
)
```


### Directory structure
A quick look at the top-level files and directories you'll see inside this project.

    .
    ├── .babelrc
    ├── .gitignore
    ├── .nvmrc
    ├── .yarn
    ├── .yarnrc
    ├── .prettierrc.json
    ├── .eslintrc.json
    ├── .husky/
    ├── .storybook/
    ├── .vscode/
    ├── README.md
    ├── src/
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── public/
    └── tailwind.config.js


