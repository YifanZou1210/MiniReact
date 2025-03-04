import { useState } from 'react'
import { fetchRandomAvatar } from '../services/unplashApi'
/**
 * Custom hooks in React encapsulate reusable logic
 */
//Encapsulate the logic of fetching an avatar image from an external service (in this case, the Unsplash API). 
//This allows the component that uses this hook to focus only on rendering and UI logic
//while the data-fetching logic (involving state management, async operations, etc.) is neatly abstracted and reusable.
function useFetchAvatar () {
  const [avatar, setAvatar] = useState('')

  const getAvatar = async () => {
    const imageUrl = await fetchRandomAvatar()
    if (imageUrl) setAvatar(imageUrl)
  }
  return { avatar, getAvatar }
}

export default useFetchAvatar