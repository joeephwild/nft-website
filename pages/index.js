import Card from "../components/Card"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Subscribe from "../components/Subscribe"


const style = {
  wrapper: 'max-w-5xl mx-auto p-16'
}
export default function Home() {
  return (
    <> 
    <Navbar/>
    <Hero />
    <div className={style.wrapper}> 
         <section className="pt-6 space-y-4">
           <h1 className="font-bold text-2xl ">Best Sellers</h1>
             <Card/>
         </section> 
    </div>
    <Subscribe />
    </>

  )
}
