import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving } from './journalSlice';
import { loadNotes } from '../../helpers/loadNotes';
import { fileUpload } from '../../helpers/fileUpload';

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/curso/notas`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const starLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const cursos = await loadNotes(uid);

        dispatch(setNotes(cursos));
    }


}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
    dispatch(setSaving());
    
    //await fileUpload( files[0]);
    const fileUploadPromises = [];
    for (const file of files) {
        
        fileUploadPromises.push( fileUpload( file ))
    }
    
    const photoUrls = await Promise.all(fileUploadPromises);
    dispatch( setPhotosToActiveNote(photoUrls));
}
}