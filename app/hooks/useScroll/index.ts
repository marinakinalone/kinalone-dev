import { useContext } from 'react'
import { ScrollContext } from '../../providers/ScrollProvider'

const useScroll = () => {
  const scrollContext = useContext(ScrollContext)

  if (!scrollContext) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }

  return { ...scrollContext }
}

export default useScroll
