import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const input = ["src/ODataMockGenerator.js"];

export default [{
  input,
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      presets: [
        ["@babel/env", {
          useBuiltIns: "usage",
          corejs: 3
        }]
      ],
      babelHelpers: "bundled",
      exclude: "node_modules/**"
    }),
    terser({
      format: {
        comments: /^!/,
      }
    })
  ],
  output: [{
    format: "umd",
    name: "omg",
    esModule: false,
    exports: "named",
    sourcemap: true,
    file: "dist/preset-env/bundle.min.js"
  }]
}];