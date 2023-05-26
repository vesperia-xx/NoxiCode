import { Button, Typography} from "@mui/material"
import style from '../styles/home.module.css'
import styleInicio from '../styles/homeInicio.module.css'
import img from '../images/web_developer.svg'

export const HomeInicio = () => {
  return (
    <>
    <div className={styleInicio.container}>
        <div className={styleInicio.content}>
            <div className={style.title}>
                ¡Aprende a programar ahora!
            </div>
            <div className={style.text}>
                “Aprende de forma divertida mientras programas tu futuro con nosotros”.
            </div>
            <div>
                    <Button variant="contained" href="/auth/register" className={styleInicio.button}>
                        <Typography  color="#FFFFFF" > Empieza ahora </Typography>
                    </Button>
            </div>
        </div>
        <div className={styleInicio.cont_img}>
            <img src={img} alt="img" className={styleInicio.img}/>
        </div>
    </div>
      
    </>
  )
   
}