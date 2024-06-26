import baseConfig, { restrictEnvAccess } from "@informerus/eslint-config/base";
import reactConfig from "@informerus/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...restrictEnvAccess,
];
