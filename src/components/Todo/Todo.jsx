import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { FaAngleDown } from "react-icons/fa";

export default function Todo() {

const [tasks, setTask]=useState(["react task","react task"," react task"]);

const [NewTask, setNewTask]=useState("");

//handelTnputchange

function InputChange(event) {

  setNewTask(event.target.value);
}

function addTask() {

  if (NewTask.trim()!=="") {
    setTask(t =>[...t,NewTask])
    setNewTask("")
  }
 
}

function RemoveTask(index) {
  
  const updatedTasks= tasks.filter((element,i) => i!==index);

  setTask(updatedTasks);
}

function moveTaskUp(index){

  if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTask(updatedTasks);
  }
}

function moveTaskDown(index){

  if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
  }
}

  return (
    <>
     <div className='Todo-card bg-[#f9f9f9] py-20 text-center w-9/12 mx-auto -mt-20 shadow-lg rounded-lg  dark:bg-black   '>
     
      <div className='mt-3'>
        <label htmlFor="addNew" className='text-lg pr-5 text-[#2f2b43] font-bold dark:text-[#f9f9f9] '> AddNew </label>
        <input 
        onChange={InputChange}
        value ={NewTask}
        className=' rounded-md shadow-md   border-0 py-1.5 pl-7 pr-20'
        type="text" 
        id='addNew'
        />

         <button
         onClick={addTask}
          className='text-lg pr-5 text-[#f9f9f9]  rounded-md border-0 bg-[#2f2b43] capitalize pl-7  py-1 ml-5 dark:text-[#f9f9f9]  dark:bg-black  '>
               <span> addNew <FaPlus className='inline mt-0 ' /> 
               </span> 
            

          </button>
      </div>
     
     <ul className=' border divide-y divide-gray-200 dark:divide-gray-700 mt-3 text-center'>
      {tasks.map((task,index) =>
    
      <li key={index} className="p-3 sm:p-4  ">
      <div className="flex justify-between items-center space-x-4 rtl:space-x-reverse">

         <div className="flex-shrink-1">
         <span className='text-lg pr-5 text-[#2f2b43] font-bold capitalize  dark:text-[#f9f9f9] '>{task}</span>
         </div>
        
         <div className="inline-flex items-center  text-base font-semibold text-gray-900 dark:text-white">
         <span className='text-red-700 border p-1  rounded-md ml-2 dark:text-white '>
                <a href="#" onClick={()=> RemoveTask(index)}>
                <FaRegTrashAlt className='' />
                </a>
              </span>
              <span className='text-[#2f2b43] border p-1  rounded-md ml-2 dark:text-white '>
                <a href="#" onClick={()=> moveTaskUp(index)}>
                <FaAngleUp  className='' />
                </a>
              </span>
              <span className='text-[#2f2b43] border p-1  rounded-md ml-2 dark:text-white '>
                <a href="#" onClick={()=> moveTaskDown(index)}>
                <FaAngleDown  className=''/>
                </a>
              </span>
         </div>
         
      </div>
      </li>
      )}
     </ul>
      </div> 
    </>
  )
} 






