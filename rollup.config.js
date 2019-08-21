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
  config.push(
    {
      input: './index.ts',
      output: {
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
          sourcemap: true
        })
      ]
    },
    {
      input: './index.ts',
      output: {
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
          sourcemap: true
        })
      ]
    }
  );
}

export default config;
