/**
 * AccordionItem 组件:只用雨展示层，不需要内部状态，所有状态由副组件通过props传入
 * @param {object} props - 组件的属性对象
 * @param {string} props.title - accordion item 的标题
 * @param {React.ReactNode} props.children - accordion item 的内容
 * @param {boolean} props.isOpen - accordion item 是否展开
 * @param {function} props.onToggle - 切换 accordion item 展开状态的函数
 */
import { HiChevronDown } from "react-icons/hi"
import { HiChevronLeft } from "react-icons/hi"
export const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="bg-amber-100 mb-0.5 rounded-2xl">
      {/* 使用button实现点击切换 */}
      {/* aria-extended是一个用于无障碍的属性，主要知识某个元素的当前展开状态，让屏幕阅读器等辅助结束能够告知用户该区域是否处于展开或折叠的状态 */}
      {/* 设置按钮背景透明/取消按钮边框/下划线/去除那边句/禁用默认焦点边框 */}
      <button
        className="rounded-xl font-mono bg-gradient-to-r from-orange-200 to-amber-200 w-full border-0 cursor-pointer focus:outline-none hover:text-blue-500"
        onClick={onToggle}
        aria-expanded={isOpen} // 指示当前面板状态，辅助屏幕阅读器使用
      >
        <div className="flex items-center space-x-2">
          {/* items-center使子元素在垂直方向上居中对齐
            space-x-2在每个子元素之间添加水平方向的间距 */}
          <span className="text-sm p-2">
            {title}
          </span>
          {isOpen ? <HiChevronDown /> : <HiChevronLeft />}
        </div>
      </button>
      {/* 只有在面板展开时才渲染内容 */}
      {isOpen && (
        <div className="p-2 font-mono text-sm bg-transparent">
          {children}
        </div>
      )}
    </div>
  )

}