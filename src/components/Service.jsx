import React from "react";
import { arrow } from "../assets";

const Service = ({ service }) => {
  return (
    <div
      key={service.id}
      className={`flex justify-center items-center ${
        service.id === "court"
          ? "xs:p-[50%] xs:bg-primary md:p-[50%] sm:py-[20%] sm:col-span-2 sm:row-span-1 sm:row-start-2 md:col-span-1 md:row-span-2 sm:border-2 sm:bg-secondary sm:border-main h-[100%]"
          : "bg-primary p-[50%]"
      } box-border flip-card flip-card-inner bg-primary shadow-md`}
    >
      <div className="flip-card-front">
        <div className="card_front xs:h-[7rem] xs:w-[7rem] sm:h-[10rem] sm:w-[10rem]">
          <img src={service.icon} alt={service.icon} />
        </div>
      </div>
      <div className="py-8 w-full h-full flip-card-back text-center antialiased subpixel-antialiased grid grid-rows-[80%_20%]">
        <div className="h-full flex flex-col justify-center content-center items-center card_back_text px-[10%]">
          <h1 className="font-bold sm:text-[2rem] xs:text-lg">
            {service.title}
          </h1>
          <div className="flex justify-center content-center items-center my-2">
            <p className="h-[70%] px-4 sm:text-base xs:text-xs ">
              {service.text}
            </p>
          </div>
        </div>
        <div className="card_back_btn grid grid-cols-[30%_70%] justify-items-start items-center pl-[10%]">
          <p className="sm:text-xl xs:text-lg font-bold mr-2">Contactar</p>
          <div
            className={`${
              service.id === "court"
                ? "xs:bg-secondary md:bg-primary"
                : "bg-secondary"
            } w-full xs:h-[2rem] flex justify-start items-center`}
          >
            <a href="#contacts" className="ml-5">
              <img src={arrow} alt="Contactar" className="w-[5rem] arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
