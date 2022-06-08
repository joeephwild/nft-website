import Card from "../components/Card"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Subscribe from "../components/Subscribe"


const style = {
  wrapper: 'p-6'
}
export default function Home() {
  return (
    <div className={style.wrapper}>
         <Navbar/>
         <Hero/>
         <section  className="">
           <h1 className="font-bold text-2xl ">Best Sellers</h1>
             <Card/>
         </section>
         <Subscribe />
    </div>
  )
}
