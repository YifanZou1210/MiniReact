// 将 App.tsx 渲染到 HTML 中的 <div id="root"></div>。
// 该文件是 TypeScript 的入口文件，通常用于配置和初始化 React 应用程序。

// StrictMode 是 React 的一个工具，用于帮助开发者发现潜在的问题。只在开发模式下启用。生产模式下自动忽略
import { StrictMode } from 'react'

// React 18 引入的新 API，替代了旧版的 ReactDOM.render()。为了支持并发渲染（Concurrent Mode）。
import { createRoot } from 'react-dom/client'

//引入全局样式，通常包含 reset、字体、主题等,Vite 支持原生导入 CSS
import './index.css'

// React 应用的根组件,在 TypeScript 中，.tsx 扩展名支持带 JSX 的文件
// import App from './App' 也可以，因为 .tsx 是默认后缀。但是为了更清晰，建议使用 .tsx 后缀
import App from './App.tsx'

// document.getElementById 返回的是 HTMLElement | null
function bootstrap() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Missing #root element in index.html');
  }
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
bootstrap();

