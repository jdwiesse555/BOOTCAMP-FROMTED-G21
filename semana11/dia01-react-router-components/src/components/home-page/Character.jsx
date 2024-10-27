import { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

import { getCharacter } from '../../services/characters'

const Character = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [character, setCharacter] = useState()

  useEffect(() => {
    getCharacter(id)
      .then(result => setCharacter(result))
  }, [])

  const handleBackHome = () => {
    console.log('handleBackHome clicked')
    navigate('/')
  }
  return (
    <>
      <h1 className='font-bold text-3xl text-center'>
        Character detail #{id}
      </h1>
      <button
          onClick={handleBackHome}
          className='bg-blue-900 text-white px-3 py-2'
        >Back home</button>

      <section className='flex justify-center flex-col items-center mt-6 text-center gap-4'>
        <Link to='/' className='font-bold text-blue-700 hover:underline'>Back home</Link>
        <img src={character?.image} width={200} />
        <h2 className='text-4xl mb-2'>{character?.race}</h2>
        <strong>{character?.originPlanet.name}</strong>
        <p>{character?.description}</p>

        {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
      </section>
    </>
  )
}

export default Character