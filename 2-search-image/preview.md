# TS+Vite project destructure

## 当前目录结构解析（按工业级视角分析）

```md
2-search-image/
├── public/                   # 静态资源（不会被 Vite 编译）
├── src/                      # 所有开发逻辑都放在这里
│   └── assets/               # 存放图片、SVG、icon 等资源
├── tsconfig.app.json         # TypeScript 针对 src 的配置（子项目专用）
├── tsconfig.json             # 根 tsconfig（包含共享类型配置）
└── tsconfig.node.json        # 专门给 Vite 配置脚本、Node 端用
```

## 每个目录/文件详细说明

### `public/`

- 静态资源（如 favicon、manifest、SEO meta 图）
- 不经过打包，原样复制到 `dist/`
- 常见用途：添加默认图片、OG 图、robots.txt

### `src/`

- 你所有组件、逻辑、页面都应该写在这里
- 建议后续结构按模块划分，例如：

```md
src/
├── pages/           # 页面级组件（带路由）
├── components/      # 通用 UI 组件
├── hooks/           # 自定义逻辑 Hook
├── services/        # API 请求（例如封装 Unsplash）
├── store/           # 状态管理（可选 Zustand, Redux）
├── utils/           # 工具函数
├── types/           # 全局类型声明
├── assets/          # 图片、字体、icon
└── main.tsx         # 应用入口，挂载点
```

### 初始化目录含义

`2-search-image/src`

```md
2-search-image/src
├── App.css  【配合 App.tsx 的样式文件，默认使用的是普通 CSS或者TailwindCSS/Sass/SCSS/CSS Modules/CSS-in-JS
├── App.tsx  【项目的“入口组件”，通常作为页面布局、路由管理、全局 UI 框架的容器。
├── assets 【静态资源目录
│   └── react.svg
├── index.css 【在 main.tsx 中被引入，用于配置全局通用样式
├── main.tsx 【React 项目的挂载入口,App.tsx 渲染到 HTML 中的 <div id="root"></div>。
└── vite-env.d.ts 【自动生成的全局类型声明文件
```

### `tsconfig.json`

- 项目的 **主配置文件**
- 包含了默认的 `compilerOptions`，并通过 `references` 引用子配置

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### `tsconfig.app.json`

- 针对你的 `src/` 项目的编译配置
- 通常是最终打包编译的目标配置
- 会从根的 `tsconfig.json` 继承

---

### `tsconfig.node.json`

- 专门给 Node（Vite 构建器）用
- 包括 `vite.config.ts`、其他脚本工具的类型支持
- 保证构建脚本不会和主项目冲突

---

## 接下来的开发流程建议

### 1️.配置开发工具链（建议安装）

```bash
npm install -D eslint prettier husky lint-staged
npx husky-init && npm install
```

### 2️.搭建基本模块结构

```bash
src/
├── pages/ (Home, SearchPage)
├── components/ (SearchInput, ImageCard)
├── services/ (unsplashApi.ts)
├── hooks/ (useSearchImage.ts)
├── types/ (image.ts)
```

### 3️.引入 Tailwind CSS（或其他 UI 框架）

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

配置 `tailwind.config.ts`:

```ts
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
]
```

### 4️.路由（可选）

```bash
npm install react-router-dom
```

用于切换搜索页、结果页、收藏页等

---

### 5️.部署准备

- `.env` 添加 API Key
- 设置 Vite base path（如果是 GitHub Pages 部署）
- 测试后使用 Vercel / Netlify 一键部署

---

### 6️.后续可扩展点

| 功能 | 推荐方式 |
|------|-----------|
| 图片缓存 | `localStorage` / `IndexedDB` |
| 收藏夹功能 | `useReducer` or 状态管理库 |
| E2E 测试 | Cypress / Playwright |
| 自动化部署 | GitHub Actions + Vercel |
