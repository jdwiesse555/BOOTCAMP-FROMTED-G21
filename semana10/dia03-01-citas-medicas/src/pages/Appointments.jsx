import { useState } from 'react'

import AppointmentForm from '../components/appointments/AppointmentForm'
import AppointmentList from '../components/appointments/AppointmentList'

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  return (
    <>
      <AppointmentForm />
      <AppointmentList />
    </>
  )
}

// Exportación por defecto
export default Appointments
