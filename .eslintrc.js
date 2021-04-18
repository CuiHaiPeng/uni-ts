module.exports = {
  root: true,
  //,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/eslint-plugin',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
      globalReturn: true,
      impliedStrict: false,
      experimentalObjectRestSpread: true, //启用对对象的扩展
    },
  },
  globals: {
    uni: true,
    wx: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    jquery: true,
  },
  // required to lint files '@typescript-eslint'  'prettier/@typescript-eslint',
  plugins: ['prettier', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prefer-const': 2, //合理使用const
    'no-new-func': 1, //禁止使用new Function
    'no-new-object': 2, //禁止使用new Object()
    'no-new-require': 2, //禁止使用new require
    'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
    'no-plusplus': 0, //禁止使用++，--
    'no-param-reassign': 0, //禁止给参数重新赋值
    'arrow-parens': [1, 'as-needed'],
    'no-proto': 2, //禁止使用__proto__属性
    'no-redeclare': 2, //禁止重复声明变量
    'no-return-assign': 1, //return 语句中不能有赋值表达式
    'no-script-url': 2, //禁止使用javascript:void(0)
    'no-ternary': 0, //禁止使用三目运算符
    'no-undef': 2, //不能有未定义的变量
    'no-unreachable': 2, //不能有无法执行的代码
    'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
    'no-undefined': 2, //不能使用undefined
    'no-unused-expressions': 2, //禁止无用的表达式
    'no-use-before-define': 2, //未定义前不能使用
    'no-with': 2, //禁用with
    'no-void': 2, //禁用void操作符
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'space-in-parens': [0, 'never'], //小括号里面要不要有空格
    eqeqeq: 2, //必须使用全等
    'consistent-return': 0, //return 后面是否允许省略
    'max-params': [0, 3], //函数最多只能有3个参数
    'new-parens': 2, //new时必须加小括号
    'valid-typeof': 2, //必须使用合法的typeof的值
    'one-var': 0, //连续声明
    'consistent-this': [2, 'that'], //this别名
    quotes: [2, 'single'], // 单引号
    semi: 0, // 不强制使用分号
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    // 'linebreak-style': [0, 'error', 'windows'], // 强制使用一致的换行风格
    'array-bracket-spacing': [2, 'never'], // 指定数组的元素之间要以空格隔开(,后面)
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // if while function 后面的{必须与if在同一行，java风格。
    'no-irregular-whitespace': 0, // 不规则的空白不允许
    'no-trailing-spaces': 1, // 一行结束后面有空格就发出警告
    // 'eol-last': 0, // 文件以单一的换行符结束
    'no-unused-vars': 1, // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-lone-blocks': 0, // 禁止不必要的嵌套块
    'no-class-assign': 2, // 禁止给类赋值
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-loop-func': 1, // 禁止在循环中出现 function 声明和表达式
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
    'no-dupe-args': 2, // 函数参数不能重复
    'no-fallthrough': 0, //禁止switch穿透
    'no-implicit-coercion': 1, //禁止隐式转换
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-extra-parens': 0, //禁止非必要的括号
    'no-eq-null': 2, //禁止对null使用==或!=运算符
    'no-eval': 1, //禁止使用eval
    'no-empty': 2, // 块语句中的内容不能为空
    'no-lonely-if': 2, //禁止else语句内只有if语句
    'no-inline-comments': 0, //禁止行内备注
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    camelcase: 0, // 强制驼峰法命名
    'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
    // 'comma-dangle': 2, // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
    'no-mixed-spaces-and-tabs': 0, // 禁止混用tab和空格
    // 'prefer-arrow-callback': 0, // 比较喜欢箭头回调
    // //
    // // ES6.相关 //
    // //
    'arrow-body-style': 2, // 要求箭头函数体使用大括号
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 0, // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-var': 0, // 要求使用 let 或 const 而不是 var
    'object-shorthand': 0, // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-template': 0, // 要求使用模板字面量而非字符串连接
    'prettier/prettier': 'error',
  },
}
