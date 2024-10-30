import { collection, query, getDocs, addDoc, doc, deleteDoc,where,updateDoc, getDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useMetricas = () => {
  const reference = collection(db, 'metricas')

  
  const fetchMetrica = async(id) => {
   
      const document = doc(db, 'metricas', id )
  
  
      const docSnap = await getDoc(document);
  
  
      console.log(docSnap.data())
    
     return docSnap.data()
   }


  const fetchMetricas = async() => {
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

  const createMetricas = async (dato) => {
    const newMetrica = {
      metrica: dato.metrica,
      medida:dato.medida,
      vol_bbls:dato.vol_bbls
    }

    const response = await addDoc(reference, newMetrica)

    return {
      id: response.id,
      newMetrica
    }
  }

  const removeMetricas = async (id) => {
    const document = doc(db, 'metricas', id )

    const response = await deleteDoc(document)

    return response
  }

  const editMetricas = async (id,data) => {
    const document = doc(db, 'metricas', id )
    
    const response = await updateDoc(document,
      data
    )
  }
  return {
    fetchMetricas,
    createMetricas,
    removeMetricas,
    fetchMetrica,
    editMetricas
  }
}