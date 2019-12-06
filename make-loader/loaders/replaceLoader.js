const loaderUtils = require('loader-utils')
// loader-utils webpack 官方推荐的插件，用与获取loader的参数

// 这个loader非常简单，一个函数
// 这里不能使用 箭头函数，需要this指向webpack
/**
 *
 * @param source 源代码
 */
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log('loader-options:', options);
  // return source.replace('dell', 'dell-Lee');
  const result = source.replace('dell', 'dell-Lee');
  // this.callback(null, result);
  // setTimeout(() => { // 这样写会报错， 在loader中执行异步操作需要特别的处理
  //   return result;
  // }, 1000);
  const callback = this.async(); // 处理loader中的异步操作, 返回的是this.callback
  setTimeout(() => {
    callback(null, result);
  }, 1000)
}

// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );

// 知识点： 插件 loader-utils, api this.callback,this.async,异步操作，
