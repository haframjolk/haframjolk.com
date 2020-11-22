import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
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
    terser(),
    copy({
      watch: ['src/index.html', 'src/assets'],
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: ['src/assets/**/*'], dest: 'dist/assets' },
      ],
    }),
  ],
};
