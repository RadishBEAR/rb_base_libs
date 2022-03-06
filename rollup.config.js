import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

export default {
  input: 'src/index.js',
  external,
  output: {
    file: 'dist/index.min.js',
    format: 'iife',
    name: 'pggLibs',
  },
  context: 'window', // 解决顶级的this的值为undefined的问题
  plugins: [
    resolve(), // 解决依赖路径
    commonjs(), // 将 CommonJS 模块转换为 ES2015 供 Rollup 处理
    babel({
      exclude: '**/node_modules/**',
      runtimeHelpers: true,
    }),
    terser({ // 压缩代码
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ],
};