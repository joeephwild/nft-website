import React from "react";
import CardItem from "./CardItem";
import anthony from '../public/assets/anthony.jpeg'
import monkey from '../public/assets/monkey1.jpeg'
import blue from '../public/assets/blue.jpeg'
import orange from '../public/assets/orange.jpeg'
import smoke from '../public/assets/smoke.jpeg'
import statue from '../public/assets/statue.jpeg'
import swag from '../public/assets/swag.jpeg'
import lilwayne from '../public/assets/lilwayne.jpeg'


const Card = () => {
   return <div className="mt-2 grid grid-cols-1 md:grid-cols-4  gap-4">
       <CardItem image={anthony} title='anthony davis' 
             description='View More'creator='joe west' price='12.96ETH' buttontext="Place Bid" />
             <CardItem image={monkey} title='Headset Monkey' 
             description='View More'creator='ApeKing' price='10.96ETH' buttontext="Place Bid" />
             <CardItem image={blue} title='Vision' 
             description='View More'creator='ApeKing' price='10.76ETH' buttontext="Place Bid" />
             <CardItem image={orange} title='Orange vibez' 
             description='View More'creator='ApeKing' price='8.16ETH' buttontext="Place Bid" />
             <CardItem image={smoke} title='anthony davis' 
             description='View More'creator='joe west' price='7.26ETH' buttontext="Place Bid" />
             <CardItem image={swag} title='anthony davis' 
             description='View More'creator='joe west' price='6.96ETH' buttontext="Place Bid" />
             <CardItem image={statue} title='anthony davis' 
             description='View More'creator='joe west' price='6.00ETH' buttontext="Place Bid" />
             <CardItem image={lilwayne} title='anthony davis' 
             description='View More'creator='lil wayne' price='5.96ETH' buttontext="Place Bid" />


            
  </div>;
};

export default Card;
