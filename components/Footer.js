import React from 'react';

function Footer() {
  return (
    <div className="relative font-neutralFace px-3 uppercase">
      <div className="hidden lg:block mb-[10vh]">
        <div className="mx-1 font-monument font-semibold py-10 text-[13.2vmax] my-1 leading-none uppercase">
          Musix <br />
          xRecord
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between ">
        <div className="">Follow Us</div>
        <div className="text-4xl underline">Instagram</div>
        <div className="text-4xl underline">Facebook</div>
        <div className="text-4xl underline">Spotify</div>
        <div className="text-4xl underline">Vimeo</div>
      </div>
      <div className="flex pt-5 flex-col lg:flex-row items-end lg:items-center justify-between">
        <div className="">Top</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">Work</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">About</div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">
          Publications
        </div>
        <div className="mx-1 font-neutralFace font-bold text-[30px]">
          Office
        </div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row lg:mt-20 mb-2 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">Copyright 2023</div>
        <div className="">JOBS</div>
        <div className="">
          A independent <br /> music agency
        </div>
        <div>open roles</div>
        <div className="flex space-x-3 mt-5">
          <div>INSTAGRAM</div>
          <div>FACEBOOK</div>
          <div>VIMEO</div>
          <div>SPOTIFY</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
