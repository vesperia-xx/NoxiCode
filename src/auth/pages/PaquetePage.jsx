import { Style } from '@mui/icons-material'
import style from '../styles/PaquetePage.module.css'
import { HomeFooter } from '../../home/components/HomeFooter'
import { HomeNavBar } from '../../home/components/HomeNavbar'

export const PaquetePage = () => {
  return (
    <>

<header>
      <HomeNavBar />
    </header>

    <div className={style.container}>
        <div className={style.list}>
            <div className={style.paquete}>
                <div className={style.header}>
                <div className={style.title}>
                    WEB
                </div>
                <div className={style.subtitle}>
                    PAQUETE
                </div>
                <div className={style.price}>
                    39,95$/mes
                </div>
                </div>
                <div className={style.content}>
                    <div>
                    Desarrollo Web Completo con HTML5, CSS3, JS React y mongoDB. 
                    </div>
                    <div>
                    Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previo.
                    </div>
                </div>
                <div className={style.footer}>
                    <button className={style.button}>ELEGIR PLAN</button>
                </div>
            </div> 
            <div className={style.paquete}>
                <div className={style.header}>
                <div className={style.title}>
                    REDES
                </div>
                <div className={style.subtitle}>
                    PAQUETE
                </div>
                <div className={style.price}>
                    39,95$/mes
                </div>
                </div>
                <div className={style.content}>
                    <div>
                    Curso NoxiCode para Fundamentos de Networking para Redes IP.
                    </div>
                    <div>
                    El mejor curso para sentar unas bases sólidas a nivel teórico y práctico sobre Redes IP - CCENT / CCNA / CISCO.
                    </div>
                </div>
                <div className={style.footer}>
                    <button className={style.button}>ELEGIR PLAN</button>
                </div>
            </div> 
            <div className={style.paquete}>
                <div className={style.header}>
                <div className={style.title}>
                    SEGURIDAD
                </div>
                <div className={style.subtitle}>
                    PAQUETE
                </div>
                <div className={style.price}>
                    39,95$/mes
                </div>
                </div>
                <div className={style.content}>
                    <div>
                    Máster en Seguridad Informática. Curso completo de Hacking NoxiCode. 
                    </div>
                    <div>
                    Aprenderás desde nivel principiante (no necesitas conocimientos previos) hasta avanzado. 
                    </div>
                </div>
                <div className={style.footer}>
                    <button className={style.button}>ELEGIR PLAN</button>
                </div>
            </div> 
        </div>
    </div>

    <section>
       <HomeFooter />
     </section>
      
    </>
  )
   
}