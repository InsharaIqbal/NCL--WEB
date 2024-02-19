
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import Logo from "../Assets/Images/LOGO.png"
import "./Css/Nav.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isclick, setisclick] = useState(false);

  const togglenavbar = () => {
    setisclick(!isclick);
  };

  return (
    <>
      <header className="text-gray-600  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  bg-[#162E45] sticky top-0 z-10 h-20  ">
        <div className="  flex justify-between items-center h-full">
          <div className="md:w-32 ml-4 md:ml-[25px] sm:ml-[10px] w-1/3 ">
            <img
              src={Logo}
              alt="logo"
              width={30}
              className=" md:w-[45px] lg:w-[50px] sm:w-[38px]"
            />
          </div>
          <div className="hidden pages lg:block  w-full lg:w-[1000px] ">
            <ul className=" mr-7 flex justify-end gap-1 items-center">
              <li className="">Home</li>
              <RxDividerVertical size={30} color="white" />
              <li className="">Team </li>
              <RxDividerVertical size={30} color="white" />
              <li><Link to="/Honourandachivement"> Honours and Achivement</Link></li>
              <RxDividerVertical size={30} color="white" />
              <li className=" ">Product</li>
              <RxDividerVertical size={30} color="white" />
              <li> <Link to="/Publications"> Publications </Link></li>
              <RxDividerVertical size={30} color="white" />
              <li ><Link to="/Capacityandbuilding">Capacity Building  </Link></li>
              <RxDividerVertical size={30} color="white" />
              <li className=" ">Callaborations</li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            {/* Hambuger Buttons for Mobile */}
            <button
              className="inline-flex items-center p-2 rounded text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={togglenavbar}
            >
              {isclick ? (
                // Cancel Button
                <MdCancel size={30} color="white" />
              ) : (
                // Openening Button
                <RxHamburgerMenu size={30} color="white" />
              )}
            </button>
          </div>
        </div>

        {/* For mobile Navigation */}
        {isclick && (
          <div className="lg:hidden text-white body-font   bg-[#162E45]">
            <div className=" w-full pt-2 px-2 pb-3 space-y-1 sm:px-3">
              <ul className=" w-full block flex-1 flex-col  text-center items-center justify-center">
                <li>Home</li>
                <li>Team</li>
                <li><Link to="/Honourandachivement"> Honours and Achivement</Link></li>
                <li>Product</li>
               <li> <Link to="/Publications"> Publications </Link></li>
               <li ><Link to="/Capacityandbuilding">Capacity Building  </Link></li>
                <li>Callaborations</li>
              </ul>
            </div>
          </div>
        )}
        {/* End of Mobile NAvigation */}


      </header>
    </>
  );
}
