import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [blague, setBlague] = useState();

  const handleJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
    .then((response) => {
      if(!response.ok) throw new Error(`<JokeAPI Calling Error>: ${response} : ${response.statusText}`);
      return response.json();
    })
    .then((data) => {setBlague(data); console.log(data)})
    .catch((err) => {
      console.log("<JokeAPI Calling Error>: " + err);
    })
  }

  useEffect(() => {
    handleJoke();
  })

  return (
    <>
      {blague && <h1>{blague?.setup}</h1>}
      {blague && <h2>{blague?.delivery}</h2>}
      <br />
      {blague && <h3>Catégorie: {blague?.category}</h3>}

      <div className="card">
        <button onClick={() => {handleJoke()}}>
          Faire apparaitre une blague
        </button>
      </div>
    </>
  )
}

export default App
