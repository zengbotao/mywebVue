/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-04-10 14:35:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-10 14:54:09
 */
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [
        2,
        "always",
        [
          "feature",
          "update",
          "fixbug",
          "refactor",
          "optimize",
          "style",
          "docs",
          "chore",
        ],
      ],
      "type-case": [0],
      "type-empty": [0],
      "scope-empty": [0],
      "scope-case": [0],
      "subject-full-stop": [0, "never"],
      "subject-case": [0, "never"],
      "header-max-length": [0, "always", 72],
    },
  };
  