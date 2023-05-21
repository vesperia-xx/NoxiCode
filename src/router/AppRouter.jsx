
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomePage } from "../home/pages/HomePage"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/CheckingAuth"



export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path="home" element={<HomePage />} />
      <Route path='/*' element={<Navigate to='home' />} />



      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}