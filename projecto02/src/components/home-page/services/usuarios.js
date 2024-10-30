import { collection, query, getDocs, addDoc, doc, deleteDoc,where,updateDoc, getDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useUsuarios = () => {
  const reference = collection(db, 'usuarios')

  
  const fetchUsuario = async(id) => {
   
      const document = doc(db, 'usuarios', id )
  
  
      const docSnap = await getDoc(document);
  
  
      console.log(docSnap.data())
    
     return docSnap.data()
   }


  const fetchUsuarios = async() => {
   // const q = query(reference,where("username","==","jdwiesse"))
   const q = query(reference)
    const data = await getDocs(q)

    const results = []

    data.forEach(doc => {
      //console.log(doc.id, doc.data())
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

  const editUsuarios = async (id,data) => {
    const document = doc(db, 'usuarios', id )
    
    const response = await updateDoc(document,
      data
    )
  }
  return {
    fetchUsuarios,
    createUsuarios,
    removeUsuarios,
    fetchUsuario,
    editUsuarios
  }
}