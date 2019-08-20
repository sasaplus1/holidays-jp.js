import typescript from 'rollup-plugin-typescript';

const config = [];

if (process.env.data) {
  config.push({
    input: './data.ts',
    output: {
      file: './data.mjs',
      format: 'esm'
    },
    plugins: [
      typescript({
        module: 'ESNext',
        target: 'ESNext'
      })
    ]
  });
}

export default config;
