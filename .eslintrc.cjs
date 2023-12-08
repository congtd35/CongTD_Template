const fs = require('fs');
const path = require('path');
const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

/**
 * 0: Không cảnh báo.
 * 1: Cảnh báo ( warning ).
 * 2: Lỗi ( error ).
 * */

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'prettier/prettier': [0, prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1, // Kiểm tra không có console.
    'no-unused-vars': 2, // Kiểm tra xem có biến nào đã được khai báo nhưng không được sử dụng trong phạm vi hiện tại không.?
    'no-use-before-define': 0, // Cảnh báo về việc sử dụng biến trước khi biến được định nghĩa
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 0, // Yêu cầu tuân thủ quy tắc sử dụng React Hooks đúng cách.
    'react/jsx-closing-tag-location': 0, // Cảnh báo về vị trí đóng thẻ trong JSX.
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'require-yield': 0,
  },
};
