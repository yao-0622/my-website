/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // 一期：SVG 占位图与文案里含中文/emoji，关闭相关告警噪声
    "@next/next/no-img-element": "off",
  },
};
