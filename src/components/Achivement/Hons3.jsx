import React from "react";
import img from "../../Assets/Images/3image1.png";
import img2 from "../../Assets/Images/3image2.png";

const Hons3 = () => {
  return (
    <div className="w-full">
      <div className=" mt-10  mx-auto w-full">
        <div className="bg-[#A8A8A8] mains px-2 py-2  sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
          <p className=" text-xl">
            NCL - NED, alongside the brilliant students from the Department of
            Biomedical Engineering, received certificates upon successful
            completion of their Final Year Design project," at New Horizon Care
            Center!
          </p>
           {/* Image Section */}
          <div className="flex mt-5 flex-col md:w-full md:flex-row justify-center gap-3">
            <div className="sm:w-full md:w-[60%] ">
              <img src={img} alt="award" className="w-full" />
            </div>

            <div className="flex sm:w-full w-full md:w-[40%]">
              <img src={img2} alt="new" className="w-full" />
            </div>
          </div>
          {/* End of Image Section */}
        </div>
      </div>
    </div>
  );
};

export default Hons3;
