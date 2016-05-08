module.exports = {
  plugins: [
    require('babel-plugin-angular2-annotations').default,
    require('babel-plugin-transform-decorators-legacy').default,
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-flow-strip-types')
  ]
};
