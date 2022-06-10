
import React from "react";
import Image from 'next/image'

const style = {
   wrapper: 'flex-col p-3  h-fit w-[100%] bg-[#32174d] overflow-clip flex relative gap-2',
   profileImages: 'relative flex flex-col items-center justify-center'
}



const Artist = ({img, profile, description, name, sold, follower, worth}) => {
  return <div className={style.wrapper}>
    <div className={style.profileImages}>
        <Image className="w-[100%] rounded-xl" src={img} 
        width={320} 
        height={160}
        objectFit="cover" alt=""/>
        <div  className="rounded-full absolute bottom-[-3rem]">
        <Image  className="rounded-full" 
        src={profile} 
        width={120} 
        height={60}
        objectFit="cover"
         alt=""/>
        </div>
    </div>
     <div className="flex-col flex m-12">
         <span className="font-bold text-xl">{name}</span>
         <span className="font-bold text-sm">{description}</span>
         <button className=' text-sm bg-gradient-to-r from-[#800080] to-blue-800 rounded text-center p-3 text-white font-bold'>Follow</button>
     </div>
       <div className="flex bg-[#000080] py-8 space-x-4 space-y-2 justify-center items-center">
       <div className="flex-col justify-center items-center text-center  flex">
          <span className="font-bold text-sm">follower</span>
          <span className="font-bold text-xl">{follower}</span>
      </div>
      <div className="flex-col justify-center items-center text-center  flex">
          <span className="font-bold text-sm">sold</span>
          <span className="font-bold text-xl">{sold}</span>
      </div>

      <div className="flex-col justify-center items-center text-center flex">
          <span className="font-bold text-sm">worth</span>
          <span className="font-bold text-xl">{worth}</span>
      </div>
    </div> 
   
  </div>;
};

export default Artist;
