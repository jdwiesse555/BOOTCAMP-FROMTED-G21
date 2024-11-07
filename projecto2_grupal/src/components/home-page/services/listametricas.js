import { collection, query, getDocs, addDoc, doc, deleteDoc,where,updateDoc, getDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useListametricas = () => {
  const reference = collection(db, 'listametricas')

  
  const fetchListametrica = async(id) => {
   
      const document = doc(db, 'listametricas', id )
  
  
      const docSnap = await getDoc(document);
  
  
      console.log(docSnap.data())
    
     return docSnap.data()
   }


  const fetchListametricas = async() => {
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

  const createListametricas = async (dato) => {
    const newListametrica = {
      metrica: dato.metrica,
      comentario: dato.comentario
      
    }

    const response = await addDoc(reference, newListametrica)

    return {
      id: response.id,
      newListametrica
    }
  }

  const removeListametricas = async (id) => {
    const document = doc(db, 'listametricas', id )

    const response = await deleteDoc(document)

    return response
  }

  const editListametricas = async (id,data) => {
    const document = doc(db, 'listametricas', id )
    
    const response = await updateDoc(document,
      data
    )
  }
  return {
    fetchListametricas,
    createListametricas,
    removeListametricas,
    fetchListametrica,
    editListametricas
  }
}