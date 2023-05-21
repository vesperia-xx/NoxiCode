import { HomeNavBar } from '../components/HomeNavbar'
import { HomeInicio } from '../components/HomeInicio'
import { HomeCursos } from '../components/HomeCursos'
import { HomeBook } from '../components/HomeBook'
import { HomeTest } from '../components/HomeTest'
import { HomeFooter } from '../components/HomeFooter'
import style from '../styles/home.module.css'

export const HomePage = () => {
  return (
    <>
    <header>
      <HomeNavBar />
    </header>
    
     <section>
      <HomeInicio />
     </section>

     <section>
      <HomeCursos />
     </section>

     <section>
      <HomeBook />
     </section>

     <section>
       <HomeTest/>
     </section>

     <section>
       <HomeFooter />
     </section>

    </>
  )
   
}
