import React from "react"
import AvatarShow from './components/AvatarShow'
import useFetchAvatar from "./hooks/useFetchAvatar"
/*
  App.jsx 作为应用的根组件，主要任务是展示头像和提供触发随机头像获取的按钮。
  1. 引入 AvatarShow 用于图片展示。
  2. 引入自定义 Hook useFetchAvatar 管理数据获取逻辑。
*/
function App () {
  // 从自定义 Hook 中获取当前头像和获取头像的函数
  const { avatar, getAvatar } = useFetchAvatar()
  console.log('app includes', avatar)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 to-green-200 p-6 relative">
      <button
        onClick={getAvatar}
        className="m-5 px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-300 to-pink-300 bg-[length:200%_400%] animate-gradient-flow transition duration-800 rounded-xl text-amber-50 hover:bg-gradient-to-r hover:from-pink-300 hover:to-blue-300 hover:via-purple-300 hover:bg-[length:200%_200%] focus:outline-none
        absolute top-4/5 transform -translate-y-1/2"
      >
        Pick Random Avatar
      </button>

      <div className="flex justify-center items-center mt-10" >
        <AvatarShow src={avatar} className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
      </div>
    </div>
  )
}

export default App

