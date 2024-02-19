import React from "react";
import img from "../../Assets/Images/4image1.png";
import img2 from "../../Assets/Images/4image2.png";

const Hons4 = () => {
  return (
    <div className="w-full">
      <div className=" mt-10  mx-auto w-full">
        <div className="bg-[#A8A8A8] mains px-2 py-2  sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px]    xl:max-w-[1100px]  2xl:max-w-[1200px]  ">
          <p className=" text-xl">
            Muhammad Miqdad Khan Congratulations on successfully presenting the
            groundbreaking paper "Portable Smart Phone Based FundUs Camera" at
            the 3rd II Science International Conference 2023 in Government
            College Women University.
          </p>
          {/* Images Section */}
          
          <div className="flex mt-5 flex-col md:w-full md:flex-row justify-center gap-3">
            <div className=" flex md:w-[40%]">
              <div className="sm:w-full  h-full  ">
                <img src={img2} alt="award" className="w-full h-full" />
              </div>
            </div>
            <div className=" sm:w-full w-full  md:w-[60%]">
              <img src={img} alt="new" className="w-full " />
            </div>
          </div>
          {/*  End of Image Section */}

        </div>
      </div>
    </div>
  );
};

export default Hons4;
