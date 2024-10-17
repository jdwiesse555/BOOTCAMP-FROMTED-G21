import { useState } from 'react'

import AppointmentForm from '../components/appointments/AppointmentForm'
import AppointmentList from '../components/appointments/AppointmentList'

const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const [appointmentSelected, setAppointmentSelected] = useState({})

  const handleSaveAppointment = (newAppointment) => {
    console.log('Me estan llamando al guardar el form desde el componente padre', newAppointment)

    // TODO: Manejar el guardado de una cita cuando se está editando

    setAppointments([...appointments, newAppointment])
  }

  const handleRemoveAppointment = (id) => {
    console.log(id)

    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointments(newAppointments)
  }

  // DONE: Añadir funcionalidad al boton Editar
  const handleEditAppointment = (appointment) => {
    setAppointmentSelected(appointment)
  }

  const handleConfirmAppointment = (id) => {
    // TODO: Manejar la confirmación y cancelación de una cita (Esta funcionalidad es libre)
  }

  return (
    <>
      <AppointmentForm
        onSave={handleSaveAppointment}
        appointment={appointmentSelected}
      />
      <AppointmentList
        appointments={appointments}
        onRemove={handleRemoveAppointment}
        onEdit={handleEditAppointment}
        onConfirm={handleConfirmAppointment}
      />
    </>
  )
}

// Exportación por defecto
export default Appointments