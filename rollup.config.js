import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy-watch';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      sourceMaps: true,
      presets: [
        [
          '@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: 2,
            targets: '> 0.25%, not dead',
          },
        ],
      ],
    }),
    resolve(),
    commonjs(),
    terser(),
    copy({
      watch: process.env.ROLLUP_WATCH ? ['src/index.html', 'static'] : false,
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: ['static/*'], dest: 'dist' },
      ],
    }),
  ],
};
