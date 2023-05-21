import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        cursos: [],
        active: null,
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {
            state.cursos.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.cursos = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.cursos = state.cursos.map(curso => {
                if (curso.id === action.payload.id) {
                    return action.payload;
                }
                return curso;
            });
        },
        deleteNoteById: (state, action) => {

        },
    }
})

export const { addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    increment,
    savingNewNote,
} = journalSlice.actions;