import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedViews } from "../views/NothingSelectedViews"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"


export const JournalPages = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        (!!active)
        ? <NoteView />
        :  <NothingSelectedViews />
      }

    
     

      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >

        <AddOutlined sx={{ fontsize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
