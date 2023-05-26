import style from '../styles/home.module.css'
import styleInfo from '../styles/homeInfo.module.css'

export const HomeInfo = () => {
  return (
    <>
    <div className={styleInfo.container}>
       <div className={styleInfo.content}>
        <div className={style.title}>
            Sobre nosotros.
        </div>
        <div className={style.text}>
        Nuestros objetivos en Noxicode como empresa es llegar a miles de usuarios alrededor del mundo, 
        interesados en aprender del mundo de la programación y la informática, ofreciendo una herramienta 
        eficaz e intuitiva con información útil para cualquier necesidad que un programador y desarrollador 
        profesional o principiante pueda requerir.
        </div>
       </div>
    </div>
      
    </>
  )
   
}