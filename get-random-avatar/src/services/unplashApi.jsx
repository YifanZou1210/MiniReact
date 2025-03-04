import axios from 'axios'
import { VITE_UNSPLASH_ACCESS_KEY } from '../config'
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