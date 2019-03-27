module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "browser": false,
  },
  "plugins": [
      "import"
  ],
  "rules": {
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-use-before-define": ["error", { "functions": false }],
    "prefer-destructuring": [0],
    "no-console": [2, { allow: ["warn", "error", "err", "log"] }],
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "new-cap": ["error", {"capIsNewExceptions": ["Q", "Q.Promise", "express.Router"]}],
    "no-param-reassign": ["error", {
      "props": true,
      "ignorePropertyModificationsFor": ["res"]
    }]
  }
};
