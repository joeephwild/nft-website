import Card from "../components/Card"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Subscribe from "../components/Subscribe"


const style = {
  wrapper: 'max-w-7xl mx-auto p-16'
}
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={style.wrapper}>
        
         <Hero/>
         <section className="pt-6">
           <h1 className="font-bold text-2xl ">Best Sellers</h1>
             <Card/>
         </section>
         <Subscribe />
    </div>
    </>

  )
}
