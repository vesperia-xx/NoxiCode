import style from '../styles/home.module.css'
import styleInicio from '../styles/homeInicio.module.css'
import img from '../images/book_lover.svg'

export const HomeBook = () => {
  return (
    <>
    <div className={styleInicio.container}>
        <div className={styleInicio.content}>
            <div className={style.title}>
                Empieza con nuestros cursos.
            </div>
            <div className={style.text}>
                “Este es el mejor lugar para empezar, tenemos cursos de 0 a experto”.
            </div>
        </div>
        <div className={styleInicio.cont_img}>
            <img src={img} alt="img" className={styleInicio.img}/>
        </div>
    </div>
      
    </>
  )
   
}