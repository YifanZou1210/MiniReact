import React from "react"
import AvatarShow from './components/AvatarShow'
import useFetchAvatar from "./hooks/useFetchAvatar"

function App () {
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

