import { collection, query, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useUsuarios = () => {
  const reference = collection(db, 'usuarios')

  const fetchUsuarios = async() => {
    const q = query(reference)

    const data = await getDocs(q)

    const results = []

    data.forEach(doc => {
      console.log(doc.id, doc.data())
      results.push({
        docId: doc.id,
        ...doc.data() // Representa el documento actual
      })
    })

    return results
  }

  const createUsuarios = async (dato) => {
    const newUsuario = {
      username: dato.username,
      password: dato.password,
      foto:dato.foto
    }

    const response = await addDoc(reference, newUsuario)

    return {
      id: response.id,
      newUsuario
    }
  }

  const removeUsuarios = async (id) => {
    const document = doc(db, 'usuarios', id )

    const response = await deleteDoc(document)

    return response
  }

  return {
    fetchUsuarios,
    createUsuarios,
    removeUsuarios
  }
}