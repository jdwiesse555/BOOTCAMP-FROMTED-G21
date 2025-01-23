import { collection, query, getDocs, addDoc, doc, deleteDoc, getDoc } from 'firebase/firestore'

import { db } from '../services/firebase'

export const useHeroes = () => {
  const reference = collection(db, 'heroes')

  const fetchHeroes = async() => {
    const q = query(reference)

    const data = await getDocs(q)

    const results = []

    data.forEach(doc => {
      // console.log(doc.id, doc.data())
      results.push({
        docId: doc.id,
        ...doc.data() // Representa el documento actual
      })
    })

    return results
  }

  const fetchHeroe = async(id) => {
    const document = doc(db, 'heroes', id )

    const docSnap = await getDoc(document);

    console.log(docSnap.data())
  }

  const createHero = async (hero) => {
    const newHero = {
      name: hero.name,
      image: hero.image
    }

    const response = await addDoc(reference, newHero)

    return {
      id: response.id,
      newHero
    }
  }

  const removeHero = async (id) => {
    const document = doc(db, 'heroes', id )

    const response = await deleteDoc(document)

    return response
  }

  return {
    fetchHeroes,
    createHero,
    removeHero,
    fetchHeroe
  }
}