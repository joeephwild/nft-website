import React from "react";
import Image from 'next/image'
import blue from '../public/assets/bluestatue.jpeg'

const style = {
    wrapper: 'relative py-6',
    content: 'text-center absolute top-[30%] left-[30%] bg-gray-800 px-3 py-6',
    input: " outline-none border-none focus:ring-[#800080] text-gray-600 rounded-lg px-2 flex-grow w-36 md:w-80",
    btn: 'bg-gradient-to-r from-[#800080] to-blue-800 px-3 py-2 mt-2 rounded-xl'
}


const Subscribe = () => {
  return <div className={style.wrapper}>
      <div className="relative min-w-[300px] h-96">
           <Image src={blue} layout="fill" objectFit="cover" alt="" />
      </div>
      
       <div className={style.content}>
           <h2 className="font-bold text-2xl text-[#800080]">Subscribe to our Newsletter</h2>
           <p className="text-sm">Let notify you of the best selling nfts</p>
           <form className="flex-col space-x-2 space-y-4">
              <label>Name</label>
           <input className={style.input} type="text" placeholder="subscribe"/>
           <br/>
           <label>Email</label>
               <input className={style.input} type="email" placeholder="subscribe"/>
           </form>
           <button className={style.btn} type="submit">Subscribe</button>
       </div>
  </div>;
};

export default Subscribe;
