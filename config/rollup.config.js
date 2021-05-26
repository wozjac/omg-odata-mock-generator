import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const input = ["src/ODataMockGenerator.js"];

export default [{
  input,
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
  output: [{
      format: "esm",
      file: "dist/esm/bundle.js",
      sourcemap: true,
      exports: "named",
    },
    {
      format: "cjs",
      file: "dist/cjs/index.js",
      sourcemap: true,
      exports: "named",
    }
  ]
}];