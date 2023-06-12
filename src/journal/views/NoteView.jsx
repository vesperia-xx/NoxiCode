import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography, Modal } from "@mui/material"
import { Close } from "@mui/icons-material";
import { ImageGallery } from "../components/ImageGallery"
import 'animate.css';
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/auth/thunks";
import { startDeletingNote, startUploadingFiles } from "../../store/journal/thunks";
import QuizApp from "../../quiz/QuizApp";

export const NoteView = () => {
  const dispatch = useDispatch();

  const [quiz, setQuiz] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { active: curso } = useSelector(state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(curso)

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote());
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  }

  const showQuiz = () => {
    setModalOpen(true);
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleQuizStart = () => {
    setQuiz(true);
    setModalOpen(false);
  }

  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ mb: 1 }} className="animate__animated animate__fadeIn animate__faster">

        <Grid item>
          <Typography fontSize={39} fontWeight='light' sx={{ ml: 30 }}> </Typography>
        </Grid>

        <Grid item sx={{ padding: 2 }} >
          <Typography component={'span'}><h1>{title}</h1></Typography>
        </Grid>

        <Grid item>

          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />

          <IconButton
            color="primary"
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>

          <Button onClick={onSaveNote} color='primary' sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>

        </Grid>

        <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ mb: 1 }}>
          <TextField
            type='text'
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label='Titulo'
            sx={{ border: 'none', mb: 1, ml: 30, mr: 10 }}
            name="title"
            value={title}
            onChange={onInputChange}
          />

          <TextField
            type='text'
            variant="filled"
            fullWidth
            multiline
            placeholder="Ingrese un titulo"
            label='Cuerpo del curso'
            sx={{ border: 'none', mb: 1, ml: 30, mr: 10 }}
            minRows={5}
            name="body"
            value={body}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container justifyContent='end'>
          <Button
            onClick={onDelete}
            sx={{ mt: 2 }}
            color='error'
          >
            <DeleteOutline>
              Borrar
            </DeleteOutline>
          </Button>
        </Grid>

        <ImageGallery images={curso.imageUrls} />

      </Grid>

      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ mb: 1, ml: 10 }}>
        <Button variant="contained" onClick={showQuiz}>
          Realizar Quiz
        </Button>
      </Grid>

      <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ mb: 1, ml: 10 }}>
        {quiz && <QuizApp />}
      </Grid>

      {/* Modal de advertencia */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#00b0f6",
            borderRadius: "10px",
            p: 4,
            outline: "none",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Close onClick={handleModalClose} sx={{ cursor: "pointer" }} />
          </Grid>
          <Grid item xs={12} sx={{ mb: 4 }}>
            <Typography variant="h6" id="modal-title" align="center" fontWeight="bold" color="#2c2f3a">
              ¿Estás seguro de que deseas iniciar el quiz?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={handleQuizStart}
              fullWidth
              sx={{
                backgroundColor: "#2f922f",
                color: "white",
                marginRight: "8px",
              }}
            >
              Iniciar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={handleModalClose}
              fullWidth
              sx={{
                backgroundColor: "#ff3333",
                color: "white",
                marginLeft: "8px",
              }}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Modal>

    </>
  )
}

