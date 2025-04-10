import React, { useState } from "react"
import { AccordionItem } from './AccordionItem'

/**
 * Accordion 组件
 * @param {Object} data - 传入的数据
 * @param {Array} data.items - accordion item 的数组
 * @param {string} data.items[].title - accordion item 的标题
 */
export const Accordion = ({ data }) => {
  // activeIndex 用于记录当前展开项的索引，初始状态为null全部收起
  const [activeIndices, setActiveIndices] = useState([])
  /**
   * 为什么初始化为null而不是false/-1等等？
   * 1. null 明确表示“没有值”或者“未选择”，而 activeIndex 表示一个索引，理应是数字，所以我们用 null 来说明“当前没有任何一个索引处于激活状态”。
   * 2. 如果用 false，则含义会混淆，因为 false 主要用于布尔判断，而 activeIndex 本质上应该保存一个数字。
   * 3. 使用 -1 也可以表示“无效索引”，但通常 -1 是用在查找数组中找不到目标的场景中，用 null 更直观地表达“不存在”或“未定义”的意思。
   * 4. 很多开发者倾向于使用 null 作为初始状态，因为它和 undefined 等值的含义相似，表示“尚未设定”或者“尚未初始化”。这比用 false（布尔值）或 -1（数字但语义不明显）更易于理解和维护
   */
  // 接收点击面板的index切换状态
  /**
   * handleToggle事件处理函数，通常作为点击或者其他交互事件的回调函数使用
   * @param {*} index 从调用该函数时传递进来的参数，一般来说渲染一组面板时，每个面板都会有一个唯一index比如列表index，当点击某个面板时处理函数handleToggle会接收到该面板对应的index表示当前交互的面板
   */
  const handleToggle = (index) => {
    //如果当前面板已展开，则收起，否则设置为当前index
    setActiveIndices(prevIndices => (
      // filter函数创建了新数组，仅包含满足条件 i不等于index的元素，filter方法遍历prevIndices数组每个元素
      // 对每个元素执行回调函数 i => i!=index如果true则保留，false则移除
      // 这是一种函数式编程的常见模式，用于不可变地从数组中移除元素，不修改原数组而是创建一个新数组
      prevIndices.includes(index) ?
        prevIndices.filter(i => i != index) :
        [...prevIndices, index]))
  }
  return (
    <div className="w-[400px] mx-auto pt-10">
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={activeIndices.includes(index)}
            onToggle={() => handleToggle(index)}
          // onToggle需要被设置为函数而handleToggle需要传入index参数才能正确更新状态。如果直接 onToggle = {handleToggle} 不会传入index参数导致handle失败
          // 所以使用箭头函数包裹handleToggle传入特定index
          >
            {item.content}
          </AccordionItem>)
      })}
    </div>
  )
}