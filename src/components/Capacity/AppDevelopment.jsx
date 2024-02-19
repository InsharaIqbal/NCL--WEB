import React from "react";
import { AppData } from "./Data/AppData";
const AppDevelopment = () => {
  return (
    <div>
      <div className="mt-10 border-b-2 border-black mx-10">
        <h1 className="text-2xl font-bold">App Development</h1>
      </div>

      <div className=" mt-10  mx-auto w-full">
        <div className=" mains px-2 py-2  sm:max-w-[600px]  md:max-w-[734px] lg:max-w-[1050px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
          <div className="flex mt-10 flex-wrap  justify-center gap-4 ">

            {AppData.map((item, i) => (
              <div key={i} className="border-2  rounded-lg card  ">
                <div className="flex justify-center w-full">
                  <div className=" bg-[#BCBCBC] mt-5 h-[100px] w-[100px] rounded-full">
                   <img src={item.images} alt="" className="w-full h-full rounded-full"/>
                   
                
                  </div>
                </div>
                <div className=" texts mt-6 text-center">
                  <h1 className="text-lg font-semibold">{item.Name}</h1>
                  <p className=" text-center">{item.field}</p>
                  <p>{item.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
