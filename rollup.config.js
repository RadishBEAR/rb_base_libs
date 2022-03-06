import path from 'path'
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/lib'),
}

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

export default {
  input:paths.input,
  external,
  output: [
    // 输出 commonjs 规范的代码
    {
      file: path.join(paths.output, 'index.js'),
      format: 'cjs',
      name: pkg.name,
    },
    // 输出 es 规范的代码
    {
      file: path.join(paths.output, 'index.esm.js'),
      format: 'es',
      name: pkg.name,
    }
  ],
  context: 'window', // 解决顶级的this的值为undefined的问题
  plugins: [
    resolve(), // 解决依赖路径
    typescript(),
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