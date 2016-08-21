# babel-preset-angular2

A Babel preset for angular2.

This preset includes the following plugins:

- babel-plugin-angular2-annotations
- babel-plugin-transform-decorators-legacy
- babel-plugin-transform-class-properties
- babel-plugin-transform-flow-strip-types

## Installation

```sh
npm install -D babel-preset-angular2 babel-preset-es2015
```

## Usage

Add the following line to your `.babelrc` file:


```json
{
  "presets": ["es2015", "angular2"]
}
```

See [babel-angular2-app](https://github.com/shuhei/babel-angular2-app) for more complete example.
