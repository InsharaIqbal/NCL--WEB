import React from "react";
import img1 from "../../Assets/Images/image1.png";
import img2 from "../../Assets/Images/image2.png";
import img3 from "../../Assets/Images/image3.png";
import img4 from "../../Assets/Images/image4.png";
import "../Achivement/Honors.css";

const HonorsView = () => {
  return (
    <>
      <div className="  mt-10 h-20 border-t-2 border-black border-b-2 flex items-center  ">
        <h1 className="text-3xl font-bold ml-2 sm:ml-2 lg:ml-6">
          Honours and Achivement
        </h1>
      </div>

      <div className="w-full">
        <div className=" mt-10  mx-auto w-full">
          <div className="bg-[#A8A8A8] mains px-2 py-2  sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
            <p className=" text-xl">
              NCL - NED takes immense pride in unveiling Dr. Majida Kazmi as the
              distinguished recipient of the esteemed Ali Suleman Habib
              Engineering Excellence Award.
            </p>
       {/* Start of Image Section */}
            <div className="flex mt-5 flex-col md:w-full md:flex-row justify-center gap-3   ">
              <div className="  h-full w-full">
                <img src={img1} alt="Main" className=" w-full" />

                <div className="flex gap-3 flex-col   lg:flex-row   mt-3">
                  <div>
                    <img
                      src={img2}
                      alt="2nd"
                      className="w-full  md:h-[220px] lg:h-full"
                    />
                  </div>
                  <div>
                    <img
                      src={img3}
                      alt="3nd"
                      className="w-full sm:h-[320px] md:h-[220px] lg:h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="  flex ">
                <div className=" w-full h-full">
                  <img src={img4} alt="4th" className="h-full w-full  " />
                </div>
              </div>
            </div>
            {/* End of Images Section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HonorsView;
