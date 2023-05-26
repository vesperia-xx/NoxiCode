import { HomeNavBar } from '../components/HomeNavbar'
import { HomeInicio } from '../components/HomeInicio'
import { HomeCursos } from '../components/HomeCursos'
import { HomeBook } from '../components/HomeBook'
import { HomeServ } from '../components/HomeServ'
import { HomeInfo } from '../components/HomeInfo'
import { HomeTest } from '../components/HomeTest'
import { HomeFooter } from '../components/HomeFooter'

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
      <HomeServ />
     </section>

     <section>
      <HomeInfo />
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
