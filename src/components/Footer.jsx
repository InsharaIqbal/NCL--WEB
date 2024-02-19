import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
   <div className="text-gray-600 h-auto body-font mt-24 bg-[#CACACA]">
  <div className=" px-5 py-24 mx-auto gap-4 flex justify-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
   
   {/* Start of Quick Section */}
    <div className="  lg:w-1/3 md:w-1/4 md:text-left">
      <a className="flex title-font font-medium md:justify-start  text-[#5F5F5F]">
      <h1 className="ml-3 text-3xl">ESCV LAB</h1>
      </a>


      <p className="mt-5 ml-3 text-xl text-[#5F5F5F]  ">Quick Links</p>
      <ul className='ml-8 mt-3'>
        <li>About Us</li>
        <li>Projects</li>
        <li>Callaboration</li>
        <li>Achivements</li>
      </ul>
    </div>

{/* End of Quick Section */}

     {/* Start of Location Section */}
      <div className="lg:w-[35%] md:w-2/5  w-full px-4">
        <h2 className="title-font font-medium text-[#5F5F5F] tracking-widest text-3xl mb-3">Find US</h2>
        <nav className="list-none mb-5 flex items-center lg:justify-start ">
        <IoLocationSharp size={50}/>
        <p className=''> Embedded Systems and Computer Vision Lab <br /> NED University, University Road, Karachi.</p>
        </nav>
        <div>
        <h2 className="title-font font-medium text-[#5F5F5F] tracking-widest text-3xl mb-3">Contact US</h2>
        <nav className="list-none ml-4 mb-5 flex  md:justify-start ">
          <div>
        <li className="text-[#5F5F5F]  hover:text-gray-800 flex gap-10 items-center"><FaPhoneAlt size={20}/> +12-345-678920</li>
          <li className="text-[#5F5F5F]  hover:text-gray-800 flex gap-10 items-center"><MdEmail size={20}/> Second Link</li>
          </div>
        </nav>
        </div>
      </div>
        {/* End of Location Section */}

        {/* Start Of Mission Section */}
      <div className="lg:w-2/5   md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#5F5F5F] tracking-widest text-3xl mb-3">Our Mission</h2>
        <nav className="list-none mb-5">
         <p>ESCV  helps executives meet the challenge of leading dynamic, global, information-intensive organizations. We provide the CIO and other digital leaders with insights on topics such as digital transformation, business complexity, data monetization, and the digital workplace. Through research, teaching, and events, the center stimulates interaction among scholars, students and practitioners. Our consortium comprises more than seventy-five member organizations. 
        </p>
        </nav>
      </div>
       {/* End Of Mission Section */}
  </div>

   {/*Start of Social Link Section */}

  <div className="bg-[#CACACA]  border-t-2 border-[#5F5F5F]">
    <div className=" py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row">
    
      <span className="flex flex-wrap  sm:mt-0 mt-2 items-center gap-10 justify-center sm:justify-start">
        <a  className="text-[#5F5F5F]">
        <ImYoutube2 size={50}/>
        </a>
        <a className=" text-[#5F5F5F]">
        <FaTwitter size={30}/>
        </a>
        <a className=" text-[#5F5F5F]">
        <FaLinkedin size={30}/>
        </a>
        <a  className=" text-[#5F5F5F]">
        <AiFillInstagram size={35} />
        </a>
        <a  className=" text-[#5F5F5F]">
        
        <FaFacebookSquare size={35}/>
        </a>
      </span>
      <p className="text-[#5F5F5F] text-xl text-center sm:text-left">@ Copyright ESCV - NCL NED
       
       </p>
    </div>
  </div>
   {/*End of Social Link Section */}
</div>
    </>
  )
}

export default Footer
