import typescript from "rollup-plugin-typescript2";
import alias from "@rollup/plugin-alias";
import externals from 'rollup-plugin-node-externals'

export default {
  input: ["src/index.tsx"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    typescript(),
    alias({ "@mui/styled-engine": "@mui/styled-engine-sc" }),
    externals()
  ],
  external: [
    "react",
  ],
};
