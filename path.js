// common.js规范，node后端实现最成功的地方
// node环境下运行
const path = require('path');
// console.log(path);
console.log(__dirname);
console.log(__filename);
console.log(path.resolve());
console.log(path.resolve(__dirname));
// 绝对路径，目录过程，写完了代码之后，有可能换目录存放，__dirname 将不要改变影响
// ./
console.log(path.resolve(__dirname, 'dist'));