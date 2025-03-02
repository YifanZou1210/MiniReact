import React, { useState } from 'react'
import AvatarShow from './AvatarShow'

function App () {
  const [avatars, setAvatars] = useState([])

  const getRandomAvatar = (params) => {
    const avatar = ['bird', 'dog']
    return avatar[Math.floor(Math.random() * avatar.length)]
  }

  const renderAvatar = avatars.map((avatar, index) => {
    return <AvatarShow type={avatar} key={index} />
  })

  const handleClick = () => {
    setAvatars([...avatars, getRandomAvatar()])
  }

  return (
    <div>
      {/* if handleClick(), it will invoke immediatedly when call */}
      <button onClick={handleClick}>Pick Avatar</button>
      <div>{avatars.map((avatar, index) => {
        return <AvatarShow type={avatar} key={index} />
      })}</div>
    </div>
  )
}

export default App