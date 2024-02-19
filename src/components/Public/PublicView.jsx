import React from "react";

import { Data } from "./PublicData";

import  { useState, useEffect } from "react";

const PublicView = () => {
  
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    setData(Data);
    setRecords(Data);
  }, [Data]);

  const filter = (e) => {

    const searchValue = e.target.value;
  setRecords(data.filter((item) => item.year.toString().includes(searchValue)));

  };
  return (
    <div>
  <h1 className="text-3xl font-bold ml-6">Our Publications</h1>
  <div className="w-full  flex justify-end mt-10">
    <input
      type="number"
      placeholder="Search Year"
      onChange={filter}
      className=" border-2 border-black mr:5 w-52 sm:mr-5 lg:mr-8"
    />
  </div>
  <div className="mx-auto mt-10 w-[96%] overflow-x-auto">
    {records.length > 0 ? (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            
            <th scope="col" className="px-6 py-3 font-bold text-xl">
              Title
            </th>
            <th scope="col" className="px-6 py-3 font-bold text-xl">
             Links
            </th>
            <th scope="col" className="px-6 py-3 font-bold text-xl">
              Year
            </th>
            

          </tr>
        </thead>
        <tbody className="">
          {/* Map function for displaying data */}
          {records.map((item, i) => (
            <tr key={i} className="bg-white mt-10 border-2 sm:text-left dark:bg-gray-800 dark:border-gray-800">
              
              <td className="px-6 py-4 text-lg  text-black">
                {item.title}
                
              </td>
              <td className="px-6 py-4 text-lg text-black">
              <a href="#" className="ml-5 h-2 underline">
                  View
                </a>
              </td>



              <td className="px-6 py-4 text-lg text-black">{item.year}</td>
            </tr>
          ))}
          {/* End of Map Function */}
        </tbody>
      </table>
    ) : (
      <p className="text-lg text-center mt-4">No matching records found.</p>
    )}
  </div>
</div>

  );
};

export default PublicView;
