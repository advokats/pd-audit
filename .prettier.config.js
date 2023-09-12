module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  bracketSameLine: true,
  bracketSpacing: true,
  useTabs: false,
  endOfLine: "auto",
  singleAttributePerLine: true,
  plugins: [require("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
