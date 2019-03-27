import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    name: 'momentmini',
    format: 'cjs',
    file: pkg.main,
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    json(),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
  external: Object.keys(pkg.dependencies),
};
