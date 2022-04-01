import React, { useState } from "react";
import {CalendarIcon, ChevronLeftIcon,ChevronRightIcon, LogoutIcon, SearchIcon, UserCircleIcon, UserGroupIcon} from '@heroicons/react/outline';
function Sidebar(){

    const [open,setOpen]=useState(true);

    return(
        <div className={`${open ? "w-72 bg-dark-purple" : "bg-blue-900 w-20"} 
        duration-300 h-screen p-3 pt-8 relative space-y-8`}>
            <div className="absolute cursor-pointer
            -right-3 top-9 w-7 border-2 border-black rounded-full 
            bg-dark-purple text-white hover:bg-yellow-200 hover:text-black" onClick={()=>setOpen(!open)}>
                {open ? <ChevronLeftIcon />:<ChevronRightIcon />}
                
            </div>
            <div className="flex items-center space-x-3 pb-3">
                    <div>
                        <UserCircleIcon 
                            className={`h-13 w-14 cursor-pointer duration-500 text-white ${!open && "text-gray-500"}`}    
                        />
                    </div>
                    <div className="text-white ">
                        <h1 className={`font-bold duration-300 ${!open && "scale-0"}`}>Name</h1>
                        <h2 className={`text-gray-500 duration-300 ${!open && "scale-0"}`}>Dummy</h2>
                    </div>

            </div>
            <div className="pb-40 space-y-4">
                <div className="flex items-center space-x-3 rounded-xl hover:bg-gray-500 duration-300 cursor-pointer">
                        <div className="p-2">
                            <UserGroupIcon 
                                className={`${!open ? "text-gray-500 h-6 w-6 pl-1" : "h-7 w-7 text-white"} cursor-pointer duration-500`}    
                            />
                        </div>
                        <div className="text-white ">
                            <h1 className={`duration-300 ${!open && "scale-0"}`}>Clients</h1>
                        </div>

                </div>
                <div className="flex space-x-3 items-center rounded-xl hover:bg-gray-500 duration-300 cursor-pointer">
                        <div className="p-2">
                            <SearchIcon 
                                className={`${!open ? "text-gray-500 h-6 w-6 pl-1" : "h-7 w-7 text-white"} cursor-pointer duration-500`}    
                            />
                        </div>
                        <div className="text-white ">
                            <h1 className={`duration-300 ${!open && "scale-0"}`}>Search</h1>

                        </div>

                </div>
                <div className="flex space-x-3 items-center rounded-xl hover:bg-gray-500 duration-300 cursor-pointer">
                        <div className="p-2">
                            <CalendarIcon 
                                className={`${!open ? "text-gray-500 h-6 w-6 pl-1" : "h-7 w-7 text-white"} cursor-pointer duration-500`}    
                            />
                        </div>
                        <div className="text-white ">
                            <h1 className={`duration-300 ${!open && "scale-0"}`}>Status</h1>
                        </div>

                </div>
            </div>
            <div className="flex space-x-4 items-center rounded-xl hover:bg-gray-500 duration-300 cursor-pointer">
                    <div className="p-2">
                        <LogoutIcon 
                            className={`${!open ? "text-gray-500 h-6 w-6 pl-1" : "h-7 w-7 text-white"}  cursor-pointer duration-500`}    
                        />
                    </div>
                    <div className="text-white">
                        <h1 className={`duration-300 ${!open && "scale-0"}`}>Logout</h1>
                    </div>

            </div>
        </div>
    )
}

export default Sidebar;