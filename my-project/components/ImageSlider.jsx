import React from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  return (
    <div className="relative w-full h-max-content m-0 z-5 rounded-5 overflow-hidden">
      <div className="w-full h-full">
        <Image
          src="https://9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io/f1717430860528x101699210282570000/Final%202nd%20section%20WEB%20%281%29.gif?ignore_imgix=true"
          alt="Image Slider"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-teal-900 font-bold h-12 w-36 text-white rounded-2xl sm:rounded-2xl sm:mt-10">
        Start Selling
      </button>
    </div>
  );
};

export default ImageSlider;
