import React from "react";
import { FaEthereum } from 'react-icons/fa'
import Image from 'next/image'

const style = {
  wrapper: 'bg-[#32174d] transition delay-300 hover:scale-105 p-2 max-w-fit rounded-lg overflow-hidden backdrop-blur-2xl ',
  content: 'text-center space-y-2',
  title: 'font-bold text-lg',
  creatorSection: 'flex justify-between justify-center items-center',
  creator: 'text-lg flex',
  creatorPrice: 'text-sm text-white font-bold',
  btn: 'bg-gradient-to-r from-[#800080] to-blue-800 px-3 text-sm py-2',
  description: 'text-blue-600 text-underline cursor-pointer'
}


const CardItem = ({image, title, description, creator, price, buttontext}) => {
  return <div className={style.wrapper}>
      <Image
      className="rounded-xl"
       src={image} 
       width={250} 
       height={250} 
        alt=""/>
      <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.creatorSection}>
             <p className={style.creator}>{creator}</p>
          <h3 className={style.creatorPrice}>{price}</h3>
          <FaEthereum/>
          </div>
          <div className={style.buttonSection}>
            <button className={style.btn}>{buttontext}</button>
          <p className={style.description}>{description}</p>
          </div>
          
      </div>
  </div>;
};

export default CardItem;
