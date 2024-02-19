import React from "react";
import img from "../../Assets/Images/2image1.png";
import img2 from "../../Assets/Images/2image2.png";
const Hons = () => {
  return (


    <div className="w-full">
      <div className="mt-10  mx-auto w-full">
        <div className="bg-[#A8A8A8] mains px-2 py-2 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
          <p className=" text-xl">
            Final year project titled "Adaptive Traffic Signal using Computer
            Vision for Intelligent Transportation System," developed at ESCV lab
            under NCL - NED, secured a 2nd place at the CIS FYDP Exhibition
            2023.
          </p>
           {/* Images Section */}
          <div className="flex mt-5 flex-col md:w-full md:flex-row items-center justify-center gap-3">
            <div className="sm:w-full md:w-2/3">
              <img src={img} alt="award" className="w-full" />
            </div>

            <div className="sm:w-full w-full md:w-1/3">
              <img src={img2} alt="new" className="w-full" />
            </div>
          </div>
          {/* End of Image Section */}
         
        </div>
      </div>
    </div>
  );
};

export default Hons;
