import Image from "next/image";
import React from "react";
import concept1 from "../images/concept1.png";
import concept2 from "../images/concept2.png";

function Concepts() {
  return (
    <div className="relative font-neutralFace px-3 w-full h-fit uppercase">
        <div className="w-full h-[1px] bg-white"></div>
            <div className="my-32">
                <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">Music</p>
                <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">is more</p>
                <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none indent-[10vw]">than the</p>
                <p className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[18rem] font-light leading-none">notes</p>
            </div>
        <div className="w-full h-[1px] bg-transparent md:bg-white mb-[20vh] md:mb-[40vh]"></div>
        <div className="absolute top-[30%] md:top-0 right-0 flex items-center justify-center flex-col w-[60vw] mt-[30vh]">
            <div className="hidden md:block mb-20">
                <p className="text-xl">(Concepts)</p>
                <p className="text-xl">(Ideas)</p>
                <p className="text-xl">(Motives)</p>
            </div>
            <Image src={concept1} alt='' className="-z-10 my-10 w-[50%]"/>
            <Image src={concept2} alt='' className="my-10"/>
        </div>
    </div>
  )
}

export default Concepts