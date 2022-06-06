import React from "react";
import Image from 'next/image'

const CardItem = ({img, title, description, creator, price}) => {
  return <div>
      <Image src={img} width={80} height={80}  alt=""/>
      <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>{creator}</h3>
          <p>{price}</p>
      </div>
  </div>;
};

export default CardItem;
