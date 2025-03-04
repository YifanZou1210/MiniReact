import React from "react"

const AvatarShow = ({ src }) => {
  console.log(src + 'is existed')
  return src ? <img src={src} alt="Avatar" width={200} /> : <p>No Avatar</p>
}

export default AvatarShow
