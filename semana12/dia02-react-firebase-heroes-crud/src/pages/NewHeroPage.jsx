import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useHeroes } from "../hooks/useHeroes"

const NewHeroPage = () => {
  const { createHero } = useHeroes()

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    image: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();
    
    const response = await createHero(form)

    if (response.id) {
      setForm({
        name: '',
        image: ''
      })

      navigate('/')
    }

    console.log('saving...')
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center">
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={handleSave}
      >
        <Link to='/' className="underline">
          ⬅ Back to Home
        </Link>

        <h2 className="text-3xl">New Hero</h2>

        <input
          type="text"
          name="name"
          placeholder="Name Ex. Spiderman"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.name}
        />

        <input
          type="text"
          name="image"
          placeholder="Image Ex. https://placehold.co/200x100"
          className="border px-3 py-2 bg-slate-100"
          onChange={handleChange}
          value={form.image}
        />

        <input
          type="submit"
          value="Save"
          className="text-white border px-3 py-2 bg-emerald-400"
        />

        <pre>{JSON.stringify(form)}</pre>
      </form>
    </main>
  )
}

export default NewHeroPage