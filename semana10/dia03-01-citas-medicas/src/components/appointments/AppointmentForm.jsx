import { useEffect, useState } from "react"

const AppointmentForm = ({ onSave, appointment }) => {
  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: ''
  }

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  useEffect(() => {
    console.log('Estoy en el form y solo me ejecuto cuando appointment cambia', appointment)
    const hasAppointment = Object.keys(appointment).length > 0

    if (hasAppointment) {
      setForm(appointment)
    }
  }, [appointment])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
    // console.log(name, value)
  }

  const handleSave = (event) => {
    event.preventDefault();
    
    const newAppointment = {
      ...form,
      id: crypto.randomUUID()
    }

    console.log('Guardando cita...', newAppointment)

    onSave(newAppointment)

    setForm(INITIAL_FORM_STATE)
  }

  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      <pre>{JSON.stringify(form, null, 2)}</pre>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSave}
      >
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border rounded-md p-3 shadow-lg"
          required
          onChange={handleChange}
          value={form.petName}
        />
        <input
          type="number"
          name="petAge"
          min="0"
          max="30"
          placeholder="Edad de la mascota"
          className="border rounded-md p-3 shadow-lg"
          onChange={handleChange}
          value={form.petAge}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Nombre del dueño"
          className="border rounded-md p-3 shadow-lg"
          onChange={handleChange}
          value={form.ownerName}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border rounded-md p-3 shadow-lg"
          onChange={handleChange}
          value={form.appointmentDate}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border rounded-md p-3 shadow-lg"
          onChange={handleChange}
          value={form.appointmentTime}
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          className="border rounded-md p-3 shadow-lg"
          rows={3}
          onChange={handleChange}
          value={form.symptoms}
        />

        <input
          type="submit"
          className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
          value="Guardar"
        />
      </form>
    </section>
  )
}

export default AppointmentForm