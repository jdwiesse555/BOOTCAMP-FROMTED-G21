import { collection, query, getDocs, addDoc, doc, deleteDoc,where,updateDoc, getDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useMedidas = () => {
  const reference = collection(db, 'mediciones')

  
  const fetchMedida = async(id) => {
   
      const document = doc(db, 'mediciones', id )
  
  
      const docSnap = await getDoc(document);
  
  
      console.log(docSnap.data())
    
     return docSnap.data()
   }

   const fetchLogin = async(usern, passw) => {
    const q = query(reference,where("username","==",usern),where("password","==",passw))
    //const q = query(reference)
    console.log("paso")
     const data = await getDocs(q)
 
     const results = []
 
     data.forEach(doc => {
       //console.log(doc.id, doc.data())
       results.push({
         docId: doc.id,
         ...doc.data() // Representa el documento actual
       })
     })
     console.log(results)
     return (results.length>0)
   }

  const fetchMedidas = async() => {
   // const q = query(reference,where("username","==","jdwiesse"))
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

  const createMedidas = async (dato) => {
    const newMedidas = {
        fecha: dato.fecha ,
        tanque: dato.tanque,
        metrica:dato.metrica,
        crudo_pies:dato.crudo_pies,
        crudo_pul:dato.crudo_pul,
        agua_pies:dato.agua_pies,
        agua_pul:dato.agua_pul,
        stock_crudo:dato.stock_crudo,
        stock_agua:dato.stock_agua
    }

    const response = await addDoc(reference, newMedidas)

    return {
      id: response.id,
      newMedidas
    }
  }

  const removeMedidas = async (id) => {
    const document = doc(db, 'mediciones', id )

    const response = await deleteDoc(document)

    return response
  }

  const editMedidas = async (id,data) => {
    const document = doc(db, 'mediciones', id )
    
    const response = await updateDoc(document,
      data
    )
  }
  return {
    fetchMedidas,
    createMedidas,
    removeMedidas,
    fetchMedida,
    fetchLogin,
    editMedidas
  }
}