module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"

  ],
  plugins: ["@typescript-eslint", "react-hooks", "unused-imports", "eslint-plugin-react"],
  rules: {
    "react/no-unused-prop-types": "off",
    "react/no-unescaped-entities": ["off", { allowHTML: true }],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "none"
      }
    ],

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-declarations": "off",

    // React rules
    "react/forbid-component-props": 0,
    "react/forbid-elements": 0,
    "react/no-array-index-key": 1,
    "react/no-children-prop": 1,
    "react/no-danger": 0,
    "react/no-deprecated": 0,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-will-update-set-state": 1,
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-optimization": 1,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/style-prop-object": 0,
    "react/void-dom-elements-no-children": 0,

    // React jsx rules
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-equals-spacing": 1,
    "react/jsx-filename-extension": [1, { "allow": "as-needed", "extensions": [".tsx"] }],
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": [
      1,
      {
        "ignoreRefs": true,
        "allowArrowFunctions": true,
        "allowBind": true
      }
    ],
    "react/jsx-no-comment-textnodes": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-target-blank": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-tag-spacing": 0,
    "react/jsx-uses-react": 0,
    "react/jsx-wrap-multilines": 0,

    // React hooks rules
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
    "jsx-a11y/alt-text": "off"
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser"
};
