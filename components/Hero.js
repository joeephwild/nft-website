
import React from "react";
import Image from 'next/image'
import hero from '../public/assets/hero.png'

const style = {
    wrapper: 'md:grid-cols-2 grid grid-cols-1 mt-12',
    content: 'ml-[10%] space-y-3 mt-[10%] ',
    line: 'border-4 border-[#00008b]',
    text: 'font-bold text-3xl md:text-6xl',
    btndiv: 'flex space-x-2',
    btn: 'bg-[#800080] px-2 py-3 text-white rounded',
    listdiv: 'space-x-4 flex items-center',
    span: 'flex-cols ',
    p: 'text-gray-300 text-sm'
    }
const Hero = () => {
  return <div className={style.wrapper}>
      <div className={style.content}>
          <h1 className={style.text}>Buy and sell
          <span className={style.line}></span> <br/> digital art,<br/>
          <p>NFT collection</p></h1>
          <p>A market place that has popular artists from the world</p>
          <div className={style.btndiv}>
              <button className={style.btn}>Explore more</button>
              <button className={style.btn+ 'px-4 bg-transparent border-bold border-2 border-[#800080]'}>Create</button>
              
          </div>
          <div className={style.listdiv}>
                  <span className={style.span}>1223k
                      <p className={style.p}>user
                      </p>
                      </span>
                  <span>156k
                      <p className={style.p}>Artworks
                      </p>
                  </span>
                  <span>200k
                      <p className={style.p}>Artist
                      </p>
                  </span>
              </div>
              <div className='bg-white/25 backdrop-blur-lg w-80 h-40 relative text-black flex-start'>
          <div ></div>
          <div ></div>
          <div></div>
      </div>
      </div>
      
          <Image src={hero}
         
           height={520}
            width={520}
             objectFit="contain"
              alt="" />
     
  </div>;
};

export default Hero;
