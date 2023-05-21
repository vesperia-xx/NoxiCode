import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import logo from '../images/logo_img.png'
import container from '../images/Container.png'




export const HomeNavBar = ({ drawerWidth = 240 }) => {
  return (
    <>
      <AppBar
        color="secondary"
        position="fixed"
        sx={{
          width: { sm: '100%' },
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
            <Typography  variant="h4" noWrap component='div'>
              <a href="/home">
              <img width="200" height="80" src={logo} />
              </a>
              </Typography>
          </Grid>

          <Grid container direction='row' justifyContent='end' alignItems='center'>


            <Button  sx={{ mr: 2 }} variant="outlined" href="/auth/login"> Iniciar Sesion </Button>
            <Button variant="contained" href="/auth/register"> <Typography  color="#FFFFFF" > Registrarse </Typography>
 </Button>

          </Grid>

        </Toolbar>


      </AppBar>


    </>




  )
}
