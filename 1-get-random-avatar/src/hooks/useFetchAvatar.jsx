import { useState } from 'react'
import { fetchRandomAvatar } from '../services/unplashApi'
/*
  自定义 Hook：useFetchAvatar
  目的：封装获取随机头像的异步操作逻辑，使组件只需要关注数据展示，不需要关心异步操作细节。
*/
function useFetchAvatar () {
  // 初始化头像状态为一个空字符串，保证首次渲染有初始值
  const [avatar, setAvatar] = useState('')

  // 定义异步函数，调用 fetchRandomAvatar 获取头像 URL
  const getAvatar = async () => {
    // await 等待 fetchRandomAvatar 返回结果
    const imageUrl = await fetchRandomAvatar()
    // 判断返回值是否有效，再更新状态，避免因错误值导致不必要的渲染
    if (imageUrl) setAvatar(imageUrl)
  }
  // 返回头像状态和触发获取头像的函数，供调用组件使用
  return { avatar, getAvatar }
}

export default useFetchAvatar