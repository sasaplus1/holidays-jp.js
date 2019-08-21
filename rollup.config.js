import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';

import meta from './package.json';

const config = [];

if (process.env.data === 'esm') {
  config.push(
    {
      input: './data.ts',
      output: {
        file: './data.mjs',
        format: 'esm'
      },
      plugins: [
        typescript({
          module: 'ESNext',
          newLine: 'lf',
          strict: true,
          target: 'ESNext'
        })
      ]
    },
    {
      input: './index.ts',
      output: {
        file: './index.mjs',
        format: 'esm'
      },
      plugins: [
        typescript({
          module: 'ESNext',
          newLine: 'lf',
          strict: true,
          target: 'ESNext'
        })
      ]
    }
  );
}

if (process.env.data === 'umd') {
  const banner = [
    '/*!',
    ' * @license holidays-jp.js Copyright(c) 2019 sasa+1',
    ' * https://github.com/sasaplus1/holidays-jp.js',
    ' * Released under the MIT license.',
    ' */'
  ].join('\n');

  config.push(
    {
      input: './index.ts',
      output: {
        banner,
        file: `./dist/${meta.name}.js`,
        format: 'umd',
        name: meta.name,
        sourcemap: true
      },
      plugins: [
        typescript({
          newLine: 'lf',
          strict: true,
          sourceMap: true,
          target: 'ESNext'
        })
      ]
    },
    {
      input: './index.ts',
      output: {
        banner,
        file: `./dist/${meta.name}.min.js`,
        format: 'umd',
        name: meta.name,
        sourcemap: true
      },
      plugins: [
        typescript({
          newLine: 'lf',
          strict: true,
          sourceMap: true,
          target: 'ESNext'
        }),
        terser({
          output: {
            preamble: banner
          },
          sourcemap: true
        })
      ]
    },
    {
      input: './index.ts',
      output: {
        banner,
        file: `./dist/${meta.name}.legacy.js`,
        format: 'umd',
        name: meta.name,
        sourcemap: true
      },
      plugins: [
        typescript({
          newLine: 'lf',
          strict: true,
          sourceMap: true,
          target: 'ES5'
        })
      ]
    },
    {
      input: './index.ts',
      output: {
        banner,
        file: `./dist/${meta.name}.legacy.min.js`,
        format: 'umd',
        name: meta.name,
        sourcemap: true
      },
      plugins: [
        typescript({
          newLine: 'lf',
          strict: true,
          sourceMap: true,
          target: 'ES5'
        }),
        terser({
          output: {
            preamble: banner
          },
          sourcemap: true
        })
      ]
    }
  );
}

export default config;
