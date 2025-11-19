import { randomDog } from './randomDog'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [dog1, setDog1] = useState();
  const [dog2, setDog2] = useState();
  const [dog3, setDog3] = useState();
  const [refresh, setRefresh] = useState<boolean>(false);
  
  const handleClick = () => {
    console.log('test')
    setRefresh(!refresh); 
  }
  
  useEffect(() => {
    randomDog(setDog1);
    randomDog(setDog2);
    randomDog(setDog3);
  }, [refresh]);

  return (
    <>
      <img className='image' src={dog1?.message} alt="Photo d'un chien" />
      <img className='image' src={dog2?.message} alt="Photo d'un chien" />
      <img className='image' src={dog3?.message} alt="Photo d'un chien" />

      <div className="card">
        <button onClick={() => handleClick()}>
          Refresh
        </button>
        <p>
        </p>
      </div>
    </>
  )
}

export default App
