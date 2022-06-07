import React from "react";
import CardItem from "./CardItem";
import anthony from '../public/assets/monkey1.jpeg'


const Card = () => {
   return <div className="mt-6 grid grid-cols-1 md:grid-cols-4  gap-4">
       <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />
             <CardItem image={anthony} title='anthony davis' 
             description='sportstar nft'creator='joe west' price='5.96ETH' buttontext="Place Bid" />


            
  </div>;
};

export default Card;
