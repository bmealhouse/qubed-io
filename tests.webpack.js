// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
// require('core-js/es5');
// Replace ./src/js with the directory of your application code and
// make sure the file name regexp matches your test files.
var context = require.context('./src', true, /Spec\.js$/);
context.keys().forEach(context);

// // Create a Webpack require context so we can dynamically require our
// // project's modules. Exclude test files in this context.
// var projectContext = require.context('./src/js', true, /^((?!__tests__).)*.jsx?$/);
// // Extract the module ids that Webpack uses to track modules.
// var projectModuleIds = projectContext.keys().map(module =>
//   String(projectContext.resolve(module)));
//
// beforeEach(() => {
//   // Remove our modules from the require cache before each test case.
//   projectModuleIds.forEach(id => delete require.cache[id]);
// });
