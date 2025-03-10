import React from "react"
import AvatarShow from './components/AvatarShow'
import useFetchAvatar from "./hooks/useFetchAvatar"

function App() {
  const { avatar, getAvatar } = useFetchAvatar()
  console.log('app includes', avatar)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <button
        onClick={getAvatar}
        className="px-6 py-3 mb-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 
                   focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Pick Random Avatar
      </button>

      <div className="flex justify-center items-center">
        <AvatarShow src={avatar} />
      </div>
    </div>
  )
}

export default App

