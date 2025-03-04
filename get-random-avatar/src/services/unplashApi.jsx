import axios from 'axios'

const BASE_URL = `https://api.unsplash.com/photos/random`
/**
 * Fetch a random avatar from Unplash
 * @returns {Promise<string} Image URL 
 */
export const fetchRandomAvatar = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        // Pass the access key in the Authorization header
        Authorization: `Client-ID HxyQ75FHJ0BDaA0wdb3Kp1kwVcJHwJFOQBpKQczsEDE`,
      },
    })
    // console.log(response.data.urls.small)
    return response.data.urls.small
  }
  catch (error) {
    console.error('error fetching avatar', error)
    return null
  }
}