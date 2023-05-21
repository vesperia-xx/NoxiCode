import style from '../styles/home.module.css'
import styleFooter from '../styles/homeFooter.module.css'
import facebook from '../images/redes/facebook.svg'
import instagram from '../images/redes/instagram.svg'
import twitter from '../images/redes/twitter.svg'
import logo from '../images/logo_img.png'

export const HomeFooter = () => {
  return (
    <>
    <div className={styleFooter.container}>
        <div className={styleFooter.group_one}>
          <div className={styleFooter.box}>
            <figure className={styleFooter.content_logo}>
              <a href="/home" className={styleFooter.logo}>
                <img src={logo} alt="" className={styleFooter.pochi_logo}/>
              </a>
            </figure>
          </div>
          <div className={styleFooter.box}>
            <h2 className={styleFooter.title_link}>EMPRESA</h2>
            <a href="/home" className={style.text}>
              Sobre nosotros
            </a>
          </div>
          <div  className={styleFooter.box}>
          <h2 className={styleFooter.title_link}>SIGUENOS</h2>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="" className={styleFooter.icon}/>
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="" className={styleFooter.icon}/>
          </a>
          <a href="https://twitter.com/">
            <img src={twitter} alt="" className={styleFooter.icon}/>
          </a>
          </div>
        </div>
        <div className={styleFooter.group_two}>
        <div className={style.text}>
          Copyright &copy; 2023 <b>NoxiCode.</b> - Todos los Derechos Reservados. 
        </div>
    </div>
    </div>
      
    </>
  )
   
}