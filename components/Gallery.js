import React from "react";
import Image from 'next/image'

import coin from '../public/assets/coinmonkey.jpeg';
import orange from '../public/assets/orange.jpeg'
import smoke from '../public/assets/smoke.jpeg'
import statue from '../public/assets/statue.jpeg'
import swag from '../public/assets/swag.jpeg'
import lilwayne from '../public/assets/lilwayne.jpeg'
import drake from '../public/assets/drake.jpeg'
import big from '../public/assets/big.jpeg'
import anthony from '../public/assets/anthony.jpeg'
import blue from '../public/assets/blue.jpeg'
import lily from '../public/assets/lilyatch.jpeg'

const Gallery = () => {
  return <div>
      <section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="grid col-span-2 w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={drake}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid col-span-2 w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={orange}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="row-span-3 grid w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={blue}
             width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid row-span-2 w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={coin}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={anthony}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={lilwayne}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={big}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={lily}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={swag}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={statue}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={smoke}
            width={1250}
            height={1250}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  </div>;
};

export default Gallery;
