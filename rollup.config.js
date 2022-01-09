import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import pkg from './package.json'

let defaults = { compilerOptions: { declaration: true } }
let override = { compilerOptions: { declaration: false } }

export default {
  input: 'src/main.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  plugins: [
    commonjs({ exclude: 'src/**' }),
    babel({
      babelHelpers: 'bundled',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    }),
    typescript(),
  ],
  external: ['react-frame-component', 'styled-components', 'react'],
}
