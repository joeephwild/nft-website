import React from "react";
import CardItem from "./CardItem";
import anthony from '../public/assets/anthony.jpeg'


const Card = () => {
  return <div className="mt-6">
       <CardItem img={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='0.01eth' />
             <CardItem/>
  </div>;
};

export default Card;
