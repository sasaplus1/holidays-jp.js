import typescript from 'rollup-plugin-typescript';

import { compilerOptions } from './tsconfig';

const config = [];

if (process.env.data) {
  config.push(
    {
      input: './data.ts',
      output: {
        file: './data.mjs',
        format: 'esm'
      },
      plugins: [
        typescript({
          ...compilerOptions,
          module: 'ESNext',
          target: 'ESNext'
        })
      ]
    },
    {
      input: './data.ts',
      output: {
        file: './data.js',
        format: 'cjs'
      },
      plugins: [
        typescript({
          ...compilerOptions,
          module: 'ESNext',
          target: 'ESNext'
        })
      ]
    }
  );
}

export default config;
