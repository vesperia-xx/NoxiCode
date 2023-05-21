import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";
import logo from "../images/logo_img.png"

export const NavBar = ( {drawerWidth = 240}) => {
  
  const dispatch = useDispatch();
  
  const onLogout = () => {
     dispatch(startLogout());
  }
  
  return (
   
<AppBar 
color="secondary"
position="fixed"
        sx={{
            width: { sm: `calc(105% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth}px`}
        }}
>
<Toolbar>
    <IconButton
      color="inherit"
      edge='start'
      sx={{mr:2 , display: { sm: 'none'}}}
    >
        <MenuOutlined/>
    </IconButton>

 <Grid container direction='row' justifyContent='space-between' alignItems='center'>
    <img width="150" height="70" src={logo} />

    <IconButton href="/home" onClick={onLogout}  color="error">
        <LogoutOutlined />
    </IconButton>


 </Grid>

</Toolbar>


</AppBar>

  )
}
