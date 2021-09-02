# minify-css-modules-classname

Better algorithm for generating classname for css modules

# Installation

```bash
npm i minify-css-modules-classname
```

or

```bash
yarn add minify-css-modules-classname
```

# Usage

```js
const { minify } = require( 'minify-css-modules-classname' )

const filepath = 'relative/file/path/to/index.module.css'
const localName = 'button'

// options: { alphabet: string, useHash: boolean, prefix: string, suffix: string }
const minified = minify( filepath, localName, options )

// `minified` will be `a-a` with default options for first-time run
// and id will be updated when you invoke `minify` for next time
```

# License

MIT
