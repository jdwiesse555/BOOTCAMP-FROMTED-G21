import Avatar from "boring-avatars";
import { useState, useEffect } from "react";
import { createStudent, fetchStudents,updateStudent,delStudent } from "./services/students";
import Swal from 'sweetalert2'

const App = () => {
  // const DEFAULT_STUDENTS = [
  //   {
  //     id: "1",
  //     name: "Bulma",
  //     city: 'Chiclayo'
  //   },
  //   {
  //     id: "2",
  //     name: "Goku",
  //     city: 'Trujillo'
  //   },
  //   {
  //     id: "3",
  //     name: "Vegeta",
  //     city: 'Lima'
  //   }
  // ]

  const [students, setStudents] = useState([])

  const [form, setForm] = useState({
    id: '',
    name: '',
    city: ''
  })

  useEffect(() => {
    console.log("useEffect")


    fetchStudents()
      .then(dataStudents => {
        setStudents(dataStudents)
      })
  }, []) // Se ejecuta el useEffect al cargar el componente la primera vez
  

  const handleSave = async (event) => {
    event.preventDefault();
    console.log(event.type)
    const isNew = (form.id === '' ) 
   

    if (isNew) {
      const newStudent = {
        //id: crypto.randomUUID(),
        name: form.name,
        city: form.city
      }
      const res = await createStudent(newStudent)

      console.log(res)

      const dataStudents = await fetchStudents()

      setStudents(dataStudents)

    
    } else {
      // Update student
      const res = await updateStudent(form)
      console.log(res)
      const dataStudents = await fetchStudents()

      setStudents(dataStudents)
         }

    setForm({
      id: '',
      name: '',
      city: ''
    })
  }

  const handleReset = (event) => {
    setForm({
      id: '',
      name: '',
      city: ''
    })
  }
  const handleChange = (event) => {
    const { name, value } = event.target // Lo que se escribe en la caja de texto

    setForm({ ...form, [name]: value })
  }

  const handleRemove = async(id) => {
    console.log('Deleting student...', id)
    const res = await delStudent(id)
    // enviar una peticion
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      // Cuando el usuario presiona el botón Yes
      if (result.isConfirmed) {
    console.log(res)
    const dataStudents = await fetchStudents()

    setStudents(dataStudents)
  }
});
  }

  const handleUpdate = (id) => {
    const studentFound = students.find(student => {
      return student.id === id
    })

    console.log(studentFound)

    setForm(studentFound)
  }

  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center">Student List</h1>

      <form
        className="flex flex-col gap-3 bg-slate-50 p-3 rounded-lg border"
        onSubmit={handleSave} 
        onReset={handleReset}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">Name</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            onChange={handleChange}
            value={form.name}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-900">City</span>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            onChange={handleChange}
            value={form.city}
          />
        </label>

        <div className="flex gap-3">
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            value='Save'
 
          />
          <input
            type="reset"
            className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            value="Limpiar"

          />
        </div>

        <pre>{JSON.stringify(form)}</pre>
      </form>

      <div className="student__list mt-3 flex flex-col gap-2">

        {/* {JSON.stringify(students)} */}

        {students.map(student => {
          return (
            <div key={student.id} className="student__row flex justify-between items-center gap-2 bg-slate-50 p-2 rounded-lg border">
              <Avatar name={student.name} variant="beam" size={48}/>
              <div className="text-left">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button onClick={() => handleUpdate(student.id)}>✏</button>
                <button onClick={() => handleRemove(student.id)}>❌</button>
              </div>
            </div>
          )
        })}

      </div>
    </main>
  )
}

export default App