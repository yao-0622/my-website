# 曜 — 个人品牌网站

> 一期：欢迎页（纯静态）。Next.js 15 + Tailwind CSS 4 + Framer Motion 12，npm workspaces Monorepo。

内容方向：**公司财务整体 AI 化 + 生活旅游**。域名：`iyao.com`。

## 技术栈

| 类型 | 技术 |
|------|------|
| 框架 | Next.js 15 (App Router)，`output: 'export'` |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4（CSS-first，`@theme` 定义色板） |
| 动画 | Framer Motion 12 |
| 包管理 | npm workspaces |

## 本地开发

```powershell
npm install
npm run dev          # http://localhost:3000
```

## 构建（静态导出）

```powershell
npm run build        # 产物在 apps/web/out/
npm run preview      # 本地预览静态产物
```

## 部署（Nginx）

```powershell
npm run build
.\scripts\deploy.ps1 -Server "user@server" -RemotePath "/opt/site/"
```

Nginx 极简配置见方案文档 §6（部署方案）。

## 目录结构

```
apps/web/
  src/app/           layout / page / globals.css / icon.svg
  src/components/welcome/  欢迎页全部组件
  src/hooks/         useTypewriter / useScrollTrigger / useMediaQuery
  src/lib/           platforms.ts（平台数据）/ constants.ts（站点信息）
  src/types/         TypeScript 类型
  public/            images/（logo / 二维码 / OG 占位图）+ robots.txt
scripts/             deploy.ps1 / deploy.sh
```

## 替换占位素材

- 平台真实链接：`apps/web/src/lib/platforms.ts`
- Logo / 头像：`apps/web/public/images/logo.svg`
- 公众号二维码：`apps/web/public/images/qrcode-wechat.svg`
- 社交分享图：`apps/web/public/images/og-image.svg`
