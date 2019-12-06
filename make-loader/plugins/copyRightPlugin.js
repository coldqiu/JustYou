class CopyRightWebpackPlugin {
  constructor(options) {
    console.log('plugin-options', options);
  }

  apply(compiler) { // compiler 可以理解为webpack实例
    compiler.hooks.compile.tap('Copyright plugin', (compilation) => {
      console.log('compiler tap');
    });
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      debugger;
      console.log('plugin-inside tapAsync');
      compilation.assets['testFile.txt'] = {
        source: function () {
          return 'testFile: content'
        },
        size: function () {
          return 19
        }
      };
      cb();
    })
  }
}

module.exports = CopyRightWebpackPlugin
