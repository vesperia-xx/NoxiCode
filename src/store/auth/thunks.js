import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { registerUserWithEmailPassword, singInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"
import { clearNotesLogout, setSaving, updateNote } from "../journal/journalSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {

    dispatch(checkingCredentials());

  }
}


export const startGoogleSignIn = () => {
  return async (dispatch) => {

    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))

  }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({ email, password, displayName });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))

  }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    console.log(result);

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));

  }
}


export const startLogout = () => {
  return async (dispatch) => {

    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());

  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth;
    const { active: curso } = getState().journal;

    const noteToFirestore = { ...curso };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/curso/notas/${curso.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(updateNote(curso));

  }

}
