import React, { useState } from "react";

export default function Header() {

    const[darkMode,setDarkMode]=useState(false);

   function TogelDarkMode(event) {
    setDarkMode(event.target.checked)
   }


  return (

    <div className={darkMode ?"dark": " "}>

    <div className=" bg-[#2f2b43]  pt-10 pb-24  dark:bg-black">
  
    <header className=" container mx-auto center p-4">
    <nav className="flex justify-between items-center">
    <div>
    <span className="text-[#f9f9f9] font-bold text-left ml-3 mb-3  text-3xl">
         My ToDo list 
     </span>
     </div>
     <ul>

        <li> 
        <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onChange={TogelDarkMode}/>
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-[#f9f9f9] dark:text-gray-300">
          {darkMode ? "Light":" Dark"}  
        </span> 
        </label>
        </li>

     </ul>
  
    </nav>
   </header>


    </div>
    </div>
   
  )
}
