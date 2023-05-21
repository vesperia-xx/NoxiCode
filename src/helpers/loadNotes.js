import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe');

    const collectionRef = collection(FirebaseDB, `${uid}/curso/notas`);
    const docs = await getDocs(collectionRef);

    const cursos = [];
   
    docs.forEach(doc => {
        cursos.push({ id: doc.id, ...doc.data() });
    })
    
    console.log(cursos)
    return cursos;
  
}