import style from '../styles/home.module.css'
import styleTest from '../styles/homeTest.module.css'
import ana from '../images/personas/ana.png'
import laura from '../images/personas/laura.png'
import sergio from '../images/personas/sergio.png'

export const HomeTest = () => {
  return (
    <>
    <div className={styleTest.container}>
        <div className={styleTest.title_content}>
        <div className={style.title}>
            Opiniones de nuestros usuarios.
        </div>
        </div>
        <div className={styleTest.testimonios}>
        <div className={styleTest.testimonio}>
            <div className={styleTest.perfil}>
                <img src={ana} alt="" className={styleTest.img}/>
            </div>
            <div className={styleTest.content}>
                <div className={style.title_two}>
                    Ana Rodriguez.
                </div>
                <div className={style.text}>
                “Programmer Handbook fue la puerta de entrada a mi carrera como desarrollador de software.
                 El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro”.
                </div>
            </div>
        </div>
        <div className={styleTest.testimonio}>
            <div className={styleTest.perfil}>
                <img src={laura} alt="" className={styleTest.img}/>
            </div>
            <div className={styleTest.content}>
                <div className={style.title_two}>
                    Laura Reyes.
                </div>
                <div className={style.text}>
                “Siempre he tenido problemas para aprender JavaScript. 
                Tomé muchos cursos, pero el curso de Programmer Handbook fue el que se quedó”.
                </div>
            </div>
        </div>
        <div className={styleTest.testimonio}>
            <div className={styleTest.perfil}>
                <img src={sergio} alt="" className={styleTest.img}/>
            </div>
            <div className={styleTest.content}>
                <div className={style.title_two}>
                    Sergio Torres.
                </div>
                <div className={style.text}>
                “Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en Programmer Handbook. 
                En un año tenía un trabajo como ingeniero de software”.
                </div>
            </div>
        </div>
        
        </div>
    </div>
      
    </>
  )
   
}