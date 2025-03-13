const AvatarShow = ({ src }) => {
  // 提取公共样式类
  const avatarClasses = "w-32 h-32 rounded-full border-4 border-white absolute top-1/2 transform -translate-y-1/2 shadow-white-50 shadow-2xl"

  // 使用传入的 src 或者默认图片
  const avatarSrc = src || "/beach sunset.jpg"  // 请确保默认图片路径正确
  return (
    <img
      src={avatarSrc}
      alt="Avatar"
      className={avatarClasses}
    />
  )
};

