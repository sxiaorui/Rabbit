# 项目约束

本项目指令文件，每次会话自动加载，请遵守。

## 版本策略（重要）

1. **一律使用最新稳定版本**：本项目所有工具与依赖（Vue、Vue Router、Element Plus、Vite、ESLint、TypeScript 等）一律使用 npm 上的最新稳定版本，**不要降级**。
2. **教程文档版本低于最新版时，以最新版为准**：`docs/` 下的教程文档基于旧版本编写（例如 Vue Router v4、ESLint v9、`unplugin-element-plus`）。当文档指定的版本低于当前最新稳定版时，**忽略文档中的版本与旧写法，使用最新稳定版**，并按新版本 API/用法实现。
3. **注意 API 差异**：版本升级后 API 可能有变化（ESLint flat config、Vue Router v5、Element Plus 按需引入等）。遇到文档写法与当前版本不兼容时，以当前版本的官方文档为准，并在必要时向用户说明差异。

## 安装依赖约定

- 安装依赖一律使用国内镜像源，避免网络问题：
  ```bash
  npm i <pkg> --registry=https://registry.npmmirror.com
  ```

## 当前关键依赖版本（2026-08-17 快照）

| 包 | 版本 |
|---|---|
| vue | ^3.5.40 |
| vue-router | ^5.2.0 |
| element-plus | ^2.14.4 |
| axios | ^1.19.0 |
| vite | ^8.2.0 |
| typescript | ~6.0.2 |
| eslint | ^10.8.1 |
| eslint-plugin-vue | ^10.10.0 |
| @vue/eslint-config-typescript | ^14.9.0 |
| sass | ^1.102.0 |
| vue-tsc | ^3.3.8 |

## 已建立的技术约定（与教程不同的地方）

- **Element Plus 按需导入**：使用 `unplugin-auto-import` + `unplugin-vue-components`（含 `ElementPlusResolver({ importStyle: "sass" })`），未使用教程中的 `unplugin-element-plus`。
- **主题定制**：`src/styles/element/index.scss` 通过 vite `additionalData` 注入。
- **ESLint**：flat config（`eslint.config.js`），已关闭 `vue/multi-word-component-names`（允许单单词组件名，如 Login/Home）。
- **axios 封装**：`src/utils/http.ts`，baseURL 为 `https://pcapi-xiaotuxian-front-devtest.itheima.net`。
