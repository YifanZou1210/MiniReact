import axios from 'axios'
import { VITE_UNSPLASH_ACCESS_KEY } from '../config'
const BASE_URL = `https://api.unsplash.com/photos/random`
/*
  函数：fetchRandomAvatar
  功能：通过调用 Unsplash API 获取随机头像的 URL。
  设计思路：
    - 使用 axios.get 发起 GET 请求。
    - 在请求头中设置 Authorization 字段，传入 API 访问密钥。
    - 从返回数据中提取 urls.small 属性（较小尺寸图片），适合头像展示。
    - 捕获异常，若请求失败则返回 null，并在控制台输出错误信息。
*/
export const fetchRandomAvatar = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        // Pass the access key in the Authorization header
        Authorization: `Client-ID ${VITE_UNSPLASH_ACCESS_KEY}`,
      }
    })
    // console.log(response.data.urls.small)
    return response.data.urls.small
  }
  catch (error) {
    console.error('error fetching avatar', error)
    return null
  }
}