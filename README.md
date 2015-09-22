menta
-----

Check which environment you are in. Inspired by [ment][ment].

Description
-----------

Menta defines the value of the current environment by:

1. Reads `ENVIRONMENT` environment variable.
2. If not found, reads `NODE_ENV` environment variable.
3. If not found, uses `"development"` by default.

Usage
-----

```javascript
var Menta = require("menta");

Menta.getEnvironment()
// => "development"

Menta.isDevelopment() // => true
Menta.isTest()        // => false
Menta.isStaging()     // => false
Menta.isProduction()  // => false
```

Installation
------------

```
$ npm install menta --save
```

[ment]: https://github.com/patriciomacadden/ment
