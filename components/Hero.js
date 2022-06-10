import React from "react";
import Image from 'next/image'
import hero from '../public/assets/Hero.png'

const style = {
    content: 'ml-[10%] mt-[20%] space-y-3 justify-center items-center',
    wrapper: 'md:grid-cols-2 grid grid-cols-1',
    text: 'font-bold text-5xl md:text-6xl',
    btndiv: 'flex space-x-2',
    btn: 'bg-[#800080] px-2 py-3 text-white rounded',
    listdiv: 'space-x-8 pl-8 flex items-center',
    span: 'flex-cols ',
    p: 'text-gray-300 text-sm',
    bidWrapper: 'md:flex flex-col md:max-w-fit px-12 justify-between space-y-3 md:space-x-4 px-4 rounded-lg bg-black border-4 border-bold border-[#800080]',
    bid: 'flex-col justify-center items-center p-1 md:p-3 space-y-2 text-center border-b md:border-r space-x-2 border-gray-600',
    bidPrice: 'text-[#800080] font-bold text-sm md:text-lg'
    }
const Hero = () => {
  return <div className={style.wrapper}>
      <div className={style.content}>
          <h1 className={style.text}>Buy and sell<br/> digital art,
          <p><span className="bg-gradient-to-r from-[#800080] to-blue-800 text-transparent bg-clip-text">NFT</span> collection</p></h1>
          <p>A market place that has popular artists from the world</p>
          <div className={style.btndiv}>
              <button className={style.btn}>Explore more</button>
              <button className={style.btn+ ' p-8 bg-transparent border-bold border-2 border-[#800080]'}>Create</button>
              
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
      </div>
          <Image 
          className="pl-2" src={hero}
           height={650}
            width={520}
             objectFit="cover"
              alt=""/>
  </div>;
};

export default Hero;