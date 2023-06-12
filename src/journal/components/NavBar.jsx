import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";
import logo from "../images/logo_img.png"
import { PDFDownloadLink, Document, Image, Page, View, Text } from "@react-pdf/renderer";
import { DocuPdf } from "./DocuPdf";

export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (

    <AppBar
      color="secondary"
      position="fixed"
      sx={{
        width: { sm: `calc(105% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <img width="150" height="70" src={logo} />
          
       
            <PDFDownloadLink document={<DocuPdf  />} fileName="CertificadoNoxi">
              <Button variant="outlined">Descargar Certificado</Button>
              </PDFDownloadLink>
            
            
        

          <IconButton href="/home" onClick={onLogout} color="error">
            <LogoutOutlined />
          </IconButton>


        </Grid>
        

      </Toolbar>


    </AppBar>

  )
}
