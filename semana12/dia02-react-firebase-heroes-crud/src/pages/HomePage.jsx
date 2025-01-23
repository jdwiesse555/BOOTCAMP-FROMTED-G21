import { useEffect, useState } from "react"
import { useHeroes } from "../hooks/useHeroes"
import { Link } from "react-router-dom"

const HomePage = () => {
  const { fetchHeroes, removeHero, fetchHeroe } = useHeroes()

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
      .then(data => setHeroes(data))
  }, [])

  const handleRemove = async (id) => {
    await removeHero(id)

    fetchHeroes()
      .then(data => setHeroes(data))
  }

  const handleGetHero = async (id) => {
    await fetchHeroe(id)
  }

  return (
    <section className="border container mx-auto flex flex-col gap-4">
      <div className="w-8/12 mx-auto flex justify-between py-3 px-6">
        <h2 className="text-3xl">Hero list</h2>
        <Link to='/hero-new'>
          <button
            className="py-2 px-3 bg-green-600 text-white w-[120px] rounded-lg hover:bg-green-700 duration-300"
          >
            New hero
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto pb-4">
        {
          heroes && heroes.map(heroe => {
            return (
              <div key={heroe.docId} className="bg-sky-500 p-4 flex flex-col gap-2">
                <div className="font-semibold mb-2">{heroe.name}</div>
                <img src={heroe.image ?? 'https://placehold.co/200x100'} />

                <button
                  className="py-2 px-3 bg-red-600 text-white w-[120px] rounded-lg hover:bg-red-700 duration-300"
                  onClick={() => handleRemove(heroe.docId)}
                >Remove</button>

                <button
                  className="py-2 px-3 bg-red-600 text-white w-[120px] rounded-lg hover:bg-red-700 duration-300"
                  onClick={() => handleGetHero(heroe.docId)}
                >View</button>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default HomePage