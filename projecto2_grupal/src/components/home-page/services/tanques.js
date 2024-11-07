import { collection, query, getDocs, addDoc, doc, deleteDoc,where,updateDoc, getDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useTanques = () => {
  const reference = collection(db, 'tanques')

  
  const fetchTanque = async(id) => {
   
      const document = doc(db, 'tanques', id )
  
  
      const docSnap = await getDoc(document);
  
  
      console.log(docSnap.data())
    
     return docSnap.data()
   }


  const fetchTanques = async() => {
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

  const createTanques = async (dato) => {
    const newTanque = {
      codigo: dato.codigo,
      metrica: dato.metrica,
      capacidad:dato.capacidad,
      HEIGHT_PIES:dato.HEIGHT_PIES
    }

    const response = await addDoc(reference, newTanque)

    return {
      id: response.id,
      newTanque
    }
  }

  const removeTanques = async (id) => {
    const document = doc(db, 'tanques', id )

    const response = await deleteDoc(document)

    return response
  }

  const editTanques = async (id,data) => {
    const document = doc(db, 'tanques', id )
    
    const response = await updateDoc(document,
      data
    )
  }
  return {
    fetchTanques,
    createTanques,
    removeTanques,
    fetchTanque,
    editTanques
  }
}