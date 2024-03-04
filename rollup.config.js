import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/index.css",
          dest: "build",
          rename: "index.css",
        },
        {
          src: "src/google-fonts.css",
          dest: "build",
          rename: "google-fonts.css",
        },
      ],
    }),
    generatePackageJson({
      baseContents: (pkg) => {
        console.log(pkg);
        return {
          name: pkg.name,
          version: pkg.version,
          main: "index.js",
          dependencies: pkg.dependencies,
          peerDependencies: pkg.peerDependencies,
          private: false,
        };
      },
    }),
  ],
};
