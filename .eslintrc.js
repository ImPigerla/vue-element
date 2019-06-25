/**
 * .vue 和 .js文件的
 * eslint规则配置
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: ['html'],
  rules: {
    'indent': [
      'error',
      2 // 缩进两个空格
    ],

    // 每个变量独立声明
    'one-var': 'off',

    // 分号不要添加
    'semi': 'off',

    // 允许直接这样 new Something()
    'no-new': 'off',

    // 禁止出现多行空行
    'no-multiple-empty-lines': [
      'error',
      {
        // 允许的最大连续空行数
        'max': 3
      }
    ],

    // 禁止出现多个空格
    'no-multi-spaces': [
      'error',
      {
        'exceptions': {
          'VariableDeclarator': true
        }
      }
    ],

    // 禁止在大括号内强制一致的间距
    'object-curly-spacing': ['error', 'never'],

    // 文件最后必须有空行，0为不限制
    'eol-last': 0,
  }
};
