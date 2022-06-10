import Artist from "../components/Artist"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Subscribe from "../components/Subscribe"


import drake from '../public/assets/drake.jpeg'
import big from '../public/assets/big.jpeg'
import anthony from '../public/assets/anthony.jpeg'
import blue from '../public/assets/blue.jpeg'
import lily from '../public/assets/lilyatch.jpeg'
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

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
    {/* artist */}
    <div>
      <h3 className="font-bold text-2xl m-6">Popular Artist</h3>
    <section  className=" grid grid-cols-1 md:grid-cols-3 gap-5 px-16 mb-6">
      <Artist img={big} profile={anthony}
      follower="150"
      worth="$12k" name="david thomas" 
      sold="600" 
      description="lorem ipsum dolor istell reference"/>
      <Artist img={big} profile={anthony}
       name="joseph omotade"
       worth="$15k"
       sold="530"
       follower="16k"
        description="lorem ipsum dolor istell reference"/>
      <Artist img={big} profile={anthony} 
      name="anthony"
      follower="16k"
      worth="$15k"
       sold="530"
      description="lorem ipsum dolor istell reference"/>
    </section> 
    </div>
     {/* gallery */} 
     <div>
       <h2 className="font-bold text-2xl space-x-4">Gallery</h2>
     <Gallery />
     </div>
      
    <Subscribe />
    <Footer/>
    </>

  )
}
