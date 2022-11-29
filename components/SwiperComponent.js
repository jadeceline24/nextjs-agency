import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import imageSlider1 from '../images/imageSlider1.png';
import imageSlider2 from '../images/imageSlider2.png';
import imageSlider3 from '../images/imageSlider3.png';
import imageSlider4 from '../images/imageSlider4.png';
import imageSlider5 from '../images/imageSlider5.png';
import imageSlider6 from '../images/imageSlider6.png';
import Image from 'next/image';

function SwiperComponent() {
  const [slides, setSlides] = useState(0);
  useEffect(() => {
    let w = window.innerWidth;
    w < 768 ? setSlides(1.2) : setSlides(1.5);
  }, []);
  return (
    <div className="relative uppercase">
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        grabCursor={true}
        className="w-full font-neutralFace h-[50vh] md:h-[65vh] relative mt-[40vh] md:mt-[33vh]"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-full flex items-end">
            <Image
              src={imageSlider1}
              alt=""
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-full">
            <div className="flex flex-col justify-between h-full py-1 px-2 ">
              <p>Multiple Projects</p>
              <p>(01)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              Heineken
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-full flex items-end">
            <Image
              src={imageSlider2}
              alt=""
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-full">
            <div className="flex flex-col justify-between h-full py-1 px-2 ">
              <p>
                <span className="text-red-700">G-Star Raw</span>
                <br /> 1:00
              </p>
              <p>(02)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl leading-none">
              G-Star Raw
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-full flex items-end">
            <Image
              src={imageSlider3}
              alt=""
              className="w-full md:w-[80%] h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-full">
            <div className="flex flex-col justify-between h-full py-1 px-2 ">
              <p>
                <span className="text-red-700">Skoda</span>
                <br /> 2:05
              </p>
              <p>(03)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              Skoda
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-full flex items-end">
            <Image
              src={imageSlider4}
              alt=""
              className="w-full md:w-[60%] h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-full">
            <div className="flex flex-col justify-between h-full py-1 px-2 ">
              <p>
                <span className="text-red-700">Publicis Milan</span>
                <br /> 12:30
              </p>
              <p>(04)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              Diesel
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-full flex items-end">
            <Image
              src={imageSlider5}
              alt=""
              className="w-full md:w-[60%] h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-full">
            <div className="flex flex-col justify-between h-full py-1 px-2 ">
              <p>
                <span className="text-red-700">Barbara Bologna</span>
                <br /> 14:00
              </p>
              <p>(05)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              Embodim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-full flex items-end">
            <Image
              src={imageSlider6}
              alt=""
              className="w-full md:w-[65%] h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-full">
            <div className="flex flex-col justify-between h-full py-1 px-2 ">
              <p>
                <span className="text-red-700">Publicis</span>
                <br /> 1:00
              </p>
              <p>(06)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              Mercedes
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
