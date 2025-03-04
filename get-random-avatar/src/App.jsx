// components/App.js
import React from "react"
import AvatarShow from './components/AvatarShow'
import useFetchAvatar from "./hooks/useFetchAvatar"

function App () {
  const { avatar, getAvatar } = useFetchAvatar()
  console.log('app includes', avatar)
  return (
    <div>
      <button onClick={getAvatar}>Pick Random Avatar</button>
      <div>
        <AvatarShow src={avatar} />
      </div>
    </div>
  )
}

export default App
