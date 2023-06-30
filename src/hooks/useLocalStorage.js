import { useState, useEffect } from 'react'

const getSaved = (key, initalValue) => {
  const saved = JSON.parse(localStorage.getItem(key))
  if (saved) return saved

  return initalValue
}

export default function useLocalStorage(key, initalValue) {
  const [value, setValue] = useState(() => {
    return getSaved(key, initalValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])
  return [value, setValue]
}
