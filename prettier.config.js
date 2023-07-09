/** @type {import('prettier').Config} */
module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    pluginSearchDirs: false,
    importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
  };
  