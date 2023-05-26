import style from '../styles/home.module.css'
import styleServ from '../styles/homeServ.module.css'
import aula from '../images/cursos/aula.png'
import code from '../images/cursos/code.png'
import test from '../images/cursos/test.png'

export const HomeServ = () => {
  return (
    <>
    <div className={styleServ.container}>
        <div>
            <div className={style.title}>
                Nuestros servicios.
        </div>
        </div>
        <div className={styleServ.list}>
                <div className={styleServ.content}>
                    <img src={aula} alt="" className={styleServ.icon} />
                    <div className={style.subtitle}>
                    Variedad de cursos especializados.
                    </div>
                    <div className={style.text}>
                    Explora una amplia gama de cursos en diferentes áreas de la programación, como desarrollo web, redes y seguridad informática.
                    </div>
                </div>
                <div className={styleServ.content}>
                    <img src={code} alt="" className={styleServ.icon}/>
                    <div className={style.subtitle}>
                    Contenidos actualizados por expertos.
                    </div>
                    <div className={style.text}>
                    Nuestros cursos son desarrollados por expertos en el campo de la programación e informática, asegurando que recibas contenidos de calidad, actualizados y relevantes.
                    </div>
                </div>      
                <div className={styleServ.content}>
                    <img src={test} alt="" className={styleServ.icon}/>
                    <div className={style.subtitle}>
                    Evaluaciones y seguimiento.
                    </div>
                    <div className={style.text}>
                    Pon a prueba tus habilidades con quizzes y evaluaciones prácticas. 
                    </div>
                </div> 
                
        </div>
    </div>
      
    </>
  )
   
}