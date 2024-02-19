import React from "react";
import img from "../../Assets/Images/5image1.png";
import img2 from "../../Assets/Images/5image2.png";

const Hons5 = () => {
  return (
    <div className="w-full">
      <div className=" mt-10  mx-auto w-full">
        <div className="bg-[#A8A8A8] mains px-2 py-2 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
          <p className=" text-xl">
            NCL - NED hosted “National Sterring Committe of NCAI Secretariat,
            Islamabad for its Technology Showcasing.𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐬𝐡𝐨𝐰𝐜𝐚𝐬𝐢𝐧𝐠.
          </p>
           {/* Images Section */}
           
          <div className="flex mt-5 flex-col md:w-full md:flex-row justify-center gap-3">
            <div className="flex  sm:w-full md:w-[50%] ">
              <img src={img} alt="award" className="w-full " />
            </div>
            <div className=" flex md:w-[50%] ">
              <div className="sm:w-full h-full ">
                <img src={img2} alt="new" className="w-full h-full" />
              </div>
            </div>
          </div>
           {/* End of Image Section */}
        </div>
      </div>
    </div>
  );
};

export default Hons5;
