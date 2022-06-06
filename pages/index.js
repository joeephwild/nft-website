import Card from "../components/Card"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const style = {
  wrapper: 'p-6'
}
export default function Home() {
  return (
    <div className={style.wrapper}>
         <Navbar/>
         <Hero/>
         <section>
           <div className="grid md:grid-cols-2 grid-cols-1">
             <Card/>
           </div>
         </section>
    </div>
  )
}
