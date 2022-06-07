import React from "react";
import Image from 'next/image'

const style = {
  wrapper: 'bg-gray-800/10 container shadow-2xl transition delay-300 hover:scale-105 p-2 max-w-fit rounded-lg overflow-hidden backdrop-blur-2xl ',
  content: 'text-center space-y-2',
  title: 'font-bold text-lg',
  creatorSection: 'flex justify-evenly',
  creator: 'text-sm',
  creatorPrice: 'text-sm text-[#800080]',
  btn: 'bg-[#800080] px-3 text-sm py-2',
  description: 'text-blue-600 text-underline cursor-pointer'
}


const CardItem = ({image, title, description, creator, price, buttontext}) => {
  return <div className={style.wrapper}>
      <Image
       src={image} 
       width={250} 
       height={250} 
        alt=""/>
      <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.creatorSection}>
             <p className={style.creator}>{creator}</p>
          <h3 className={style.creatorPrice}>{price}</h3>
          </div>
          <div className={style.buttonSection}>
            <button className={style.btn}>{buttontext}</button>
          <p className={style.description}>{description}</p>
          </div>
          
      </div>
  </div>;
};

export default CardItem;
