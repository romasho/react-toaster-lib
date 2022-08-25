import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias'
import path from 'path'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    alias({
      resolve: ['.tsx', '.ts'],
      entries: [
        {
          find: '@',
          replacement: path.resolve(
            path.resolve(__dirname),
            'src',
          ),
        },
      ],
    }),
  ],
}
