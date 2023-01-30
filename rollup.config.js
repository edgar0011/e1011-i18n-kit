import babelPlugin from 'rollup-plugin-babel'
import resolvePlugin from 'rollup-plugin-node-resolve'
import commonjsPlugin from 'rollup-plugin-commonjs'
import jsonPlugin from 'rollup-plugin-json'

// import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const commonConfig = {
  plugins: [
    resolvePlugin({
      extensions,
    }),
    babelPlugin({
      extensions,
      exclude: [
        'node_modules/**',
      ],
    }),
    jsonPlugin(),
    commonjsPlugin(),
  ],
  external: [
    'react',
    'ramda',
    'lodash-es',
    'i18next',
    'core-js',
    'react-i18next',
    'styled-components',
    'sanitize-html',
  ],
  watch: {
    include: 'src/**',
  },
}

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: 'dist/lib/cjs',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: 'dist/lib/esm',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    ...commonConfig,
  },
  {
    input: ['src/react/index.ts'],
    output: [
      {
        dir: 'dist/react',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: 'dist/react/esm',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    ...commonConfig,
  },
  {
    input: ['src/locales'],
    output: [
      {
        dir: 'dist/locales',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: 'dist/locales/esm',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    ...commonConfig,
  },
]
