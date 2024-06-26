module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 定义规则类型ds
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      // 当前验证的错误级别，2代表错误级别的错误
      2,
      // 在什么情况下进行验证，always表示任何情况下都进行验证
      "always",
      // 泛型内容, 对应cz-config定义的types
      [
        "feat", // 新功能 feature
        "fix", // 修复 bug
        "docs", // 文档注释d
        "style", // 代码格式(不影响代码运行的变动)
        "refactor", // 重构(既不增加新功能，也不是修复bug)
        "perf", // 性能优化d
        "test", // 增加测试d
        "chore", // 构建过程或辅助工具的变动d
        "revert", // 回退
        "build", // 打包
      ],
    ],
    // subject 大小写不做校验
    "subject-case": [0],
  },
};
