const AvatarShow = ({ src }) => {
  /**
   * w-64 width 16rem
   * h-64 height 16rem
   * rounded-xl border-radius:0.75rem/12px 
   * absolute top-1/2 绝对定位 距离父级顶部50%
   * transform -translate-y-1/2 向上平移自身50%高度
   * shadow-white-50 白色轻微阴影
   * shadow-2xl 超大阴影
   */
  const avatarClasses =
    "w-64 h-64 rounded-xl border-4 border-white absolute top-1/2 transform -translate-y-1/2 shadow-white-50 shadow-2xl"

  // 确保默认图片路径正确
  const avatarSrc = src || "/public/beach sunset.jpg" // public 文件夹下的图片

  return <img src={avatarSrc} alt="Avatar" className={avatarClasses} />
}

// 这里正确地导出组件
export default AvatarShow;


