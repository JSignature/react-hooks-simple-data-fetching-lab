// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {
  const [dogImage, setDogImage] = useState('')
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then(obj => setDogImage(obj.message))
  }, [])

  if (!dogImage) return <p>Loading...</p>

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  )
}

export default App
