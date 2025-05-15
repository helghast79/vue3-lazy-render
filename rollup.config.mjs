import vue from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js', // adjust if your entry file is different
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  external: ['vue'],
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    postcss(),
    terser()
  ]
};
