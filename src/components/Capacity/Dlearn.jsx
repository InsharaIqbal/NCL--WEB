import React from "react";
import "../Capacity/Cap.css";
import { DLearns } from "./Data/DlearnData";


const Dlearn = () => {

  

  return (
    <div>
      <div className="  mt-10 h-20 border-t-2 border-black border-b-2 sm:justify-between sm:flex items-center  ">
        <h1 className="text-3xl font-bold ml-2 sm:ml-2 lg:ml-6">
          Capacity Building
        </h1>
        <ul className="flex newlist mt-4 sm:mb-4 sm:gap-6 sm:mr-10 text-lg font-semibold items-center justify-evenly ">
          <li>Phd</li>
          <li>RAs</li>
          <li>MS</li>
          <li>FYPD</li>
          <li>Interns</li>
        </ul>
      </div>

        <div className=" flex justify-center">
      <h1 className="text-2xl font-semibold mt-10 title text-center">
        SPRING 2022 INTERNS
      </h1>
        </div>

      <div className="mt-24 border-b-2 border-black mx-10">
        <h1 className="text-2xl font-bold  ">Deep Learning</h1>
      </div>

      <div className=" mt-10  mx-auto w-full">
        <div className=" mains px-2 py-2  sm:max-w-[600px]  md:max-w-[734px] lg:max-w-[1050px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
          <div className="flex mt-10 flex-wrap  justify-center gap-4   ">
          {
            DLearns.map((item , i)=> (
            
            <div key={i} className="border-2  rounded-lg card  ">
                <div className="flex justify-center w-full">
                  <div className=" bg-[#BCBCBC] mt-5 h-[100px] w-[100px] rounded-full">
                  <img src={item.images} alt="" className="h-full w-full rounded-full"/>
                  </div>
                 
                </div>
                <div className=" texts mt-6 text-center">
                  <h1 className="text-lg font-semibold">{item.Name}</h1>
                  <p>{item.field}</p>
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

export default Dlearn;
