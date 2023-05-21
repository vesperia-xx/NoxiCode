import style from '../styles/home.module.css'
import styleCursos from '../styles/homeCursos.module.css'
import js from '../images/cursos/js.png'
import react from '../images/cursos/react.png'
import python from '../images/cursos/python.png'
import mongo from '../images/cursos/mongo.png'

export const HomeCursos = () => {
  return (
    <>
    <div className={styleCursos.container}>
        <div>
            <div className={style.title_two}>
                Cursos que ofrecemos...
        </div>
        </div>
        <div className={styleCursos.list}>
                <div>
                    <img src={js} alt="" className={styleCursos.icon} />
                </div>
                <div>
                    <img src={react} alt="" className={styleCursos.icon}/>
                </div>      
                <div>
                    <img src={python} alt="" className={styleCursos.icon}/>
                </div> 
                <div>
                    <img src={mongo} alt="" className={styleCursos.icon}/>
                </div> 
        </div>
    </div>
      
    </>
  )
   
}