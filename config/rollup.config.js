import commonjs from "@rollup/plugin-commonjs";

const input = ["src/ODataMockGenerator.js"];
const banner_esm = "import { JSDOM } from \"jsdom\"; import _jQuery from \"jquery\"; " +
  "const { window } = new JSDOM(\"\"); const jQuery = _jQuery(window);";
const banner_cjs = "const { JSDOM } = require( \"jsdom\" ); const { window } = new JSDOM(\"\" ); " +
  "const jQuery = require( \"jquery\" )( window );";

export default [{
  input,
  external: ["jsdom", "jquery"],
  plugins: [
    commonjs(),
  ],
  output: [{
      format: "esm",
      file: "dist/esm/bundle.js",
      sourcemap: true,
      exports: "named",
      banner: banner_esm,
      globals: {
        jsdom: "JSDOM",
        jquery: "jQuery"
      }
    },
    {
      format: "cjs",
      file: "dist/cjs/index.js",
      sourcemap: true,
      banner: banner_cjs,
      exports: "named",
      globals: {
        jsdom: "JSDOM",
        jquery: "jQuery"
      }
    }
  ]
}];