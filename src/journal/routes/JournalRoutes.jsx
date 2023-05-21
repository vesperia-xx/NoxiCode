import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPages } from "../pages/JournalPages"


export const JournalRoutes = () => {
    return (
        <Routes>

            <Route path="/auth/journalpage" element={<JournalPages />} />

            <Route path="/*" element={<Navigate to='/auth/journalpage' />} />

        </Routes>
    )
}
