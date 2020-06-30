import { useEffect, useState } from 'react'

function dispatchMatch(mql, setMatch) {
  return () => {
    setMatch(mql.matches)
  }
}

export default function useMediaQuery(query) {
  const [status, setStatus] = useState('didMount')
  const [hasMatch, setMatch] = useState(false)
  const mql = window.matchMedia(query)
  const checkMediaQuery = dispatchMatch(mql, setMatch)

  useEffect(() => {
    if (status === 'didMount') {
      checkMediaQuery()
      mql.addListener(checkMediaQuery)
      setStatus('hasUpdated')
    }
  }, [status, mql, checkMediaQuery])

  return hasMatch
}
