module.exports = {
    presets: [
      ['@babel/preset-env',
        {
          useBuiltIns: 'usage',
          modules: false,
          corejs: 3,
        },
      ],
    ],
    plugins: [
      '@babel/plugin-syntax-jsx',
      ['babel-plugin-module-resolver', {
        alias: {
          '@': './',
          '@babel/runtime': '@babel/runtime-corejs3',
        },
      }],
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-proposal-decorators', {
        legacy: true,
      }],
      ['@babel/plugin-proposal-class-properties', {
        loose: true,
      }],
      ['@babel/plugin-transform-runtime', {
        useESModules: true,
        corejs: 3,
      }],
  
    ],
  };
   