const AppointmentForm = () => {
  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border rounded-md p-3 shadow-lg"
        />
        <input
          type="text"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border rounded-md p-3 shadow-lg"
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Nombre del dueño"
          className="border rounded-md p-3 shadow-lg"
        />
        <input
          type="text"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border rounded-md p-3 shadow-lg"
        />
        <input
          type="text"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border rounded-md p-3 shadow-lg"
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          className="border rounded-md p-3 shadow-lg"
          rows={3}
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