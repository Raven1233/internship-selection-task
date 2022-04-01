import { MailIcon, PhoneIcon, UsersIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";

function Dashboard(){
    return(
        <div className=" pt-5 pl-10 ">
            <div className="w-full flex space-x-4">
                <div className="w-100 h-80 bg-white border-gray-200 rounded-md shadow-2xl">
                    <div className="border-b-2 pl-3 pt-2 pb-2 border-gray-200">
                        <h1 className="font-bold text-gray-200">Most Leads</h1>
                    </div>
                    <div className="pl-5 pt-3 pr-5">
                        <div className="flex items-center border-b pt-3 pb-3 space-x-80 border-gray-200">
                            <div className="flex items-center">
                                <MailIcon className="h-5 w-5 text-blue-300"/>
                                <h1 className="pl-2 font-bold text-gray-300">Name</h1>
                            </div>
                            <div className="pr-2">
                                <h1 className="font-bold text-gray-500">abc</h1>
                            </div>
                        </div>
                        <div className="flex border-b pt-3 pb-3 space-x-80 border-gray-200">
                            <div className="flex items-center">
                                <UsersIcon className="h-5 w-5 text-blue-600"/>
                                <h1 className="pl-2 font-bold text-gray-300">Pan</h1>
                            </div>
                            <div className="pl-4">
                                <h1 className="font-bold text-gray-500">123</h1>
                            </div>
                        </div>
                        <div className="flex border-b pt-3 pb-3 space-x-60 border-gray-200">
                            <div className="flex items-center">
                                <PhoneIcon className="h-5 w-5 text-orange-600"/>
                                <h1 className="pl-2 font-bold text-gray-300">Address</h1>
                            </div>
                            <div className="pl-14">
                                <h1 className="font-bold text-gray-500">noida</h1>
                            </div>
                        </div>
                        <div className="flex border-b pt-3 pb-3 space-x-80 border-gray-200">
                            <div className="flex items-center">
                                <ViewGridIcon className="h-5 w-5 text-blue-200"/>
                                <h1 className="pl-2 font-bold text-gray-300">Phone</h1>
                            </div>
                            <div className="">
                                <h1 className="font-bold text-gray-500">123</h1>
                            </div>
                        </div>
                        <div className="flex space-x-60 pt-3 pb-3 ">
                            <div className="flex items-center">
                                <ViewGridIcon className="h-5 w-5 text-blue-200"/>
                                <h1 className="pl-2 font-bold text-gray-300">Email</h1>
                            </div>
                            <div className="pl-4">
                                <h1 className="font-bold text-gray-500">abc@test.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-60 bg-white border-gray-200 rounded-md shadow-2xl">
                    <div className="border-b-2 pl-3 pt-2 pb-2 border-gray-200">
                        <h1 className="font-bold text-gray-200">Types of Income</h1>
                    </div>
                    <div className="pl-5 pt-3 pr-5">
                        <div className="flex items-center">
                            <input type="checkbox" checked={false}/>
                            <h1 className="pl-2">Default Checkbox</h1>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={true}/>
                            <h1 className="pl-2">Checked Checkbox</h1>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={false}/>
                            <h1 className="pl-2">Default Checkbox</h1>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={true}/>
                            <h1 className="pl-2">Checked Checkbox</h1>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={false}/>
                            <h1 className="pl-2">Default Checkbox</h1>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={true}/>
                            <h1 className="pl-2">Checked Checkbox</h1>
                        </div>
                    </div>
                </div>
            </div>
                <div className="pt-16 grid grid-cols-2 flex space-x-4">
                    <div className="w-100 h-60 bg-white border-gray-200 rounded-md shadow-2xl">
                        <div className="border-b pl-4 pt-2 pb-2 border-gray-200">
                            <h1 className="font-bold text-gray-200">Danger Zone</h1>
                        </div>
                        <div className="pb-4">
                            <div className="pl-4 pt-2 pb-2">
                                <h1 className="font-bold text-gray-200">Request for</h1>
                            </div>
                            <div className="pl-4 ">
                                <p>
                                    Transfer this account to another user or organization where you &nbsp;&nbsp;<br/> have the ability ot create repositories
                                </p>
                            </div>
                        </div>
                        <div className="pl-4 space-x-2 flex items-center"> 
                            <div className="w-12 pl-2 pt-2 pr-2 pb-2 border-2 border-black shadow-2xl rounded-lg">
                                <h1>abc</h1>
                            </div>
                            <div className="w-13 pl-2 pt-2 pr-2 pb-2 border-2 border-black shadow-2xl rounded-lg">
                                <h1>abc1</h1>
                            </div>
                            <div className="w-19 pl-2 pt-2 pr-2 pb-2 border-2 border-black shadow-2xl rounded-lg">
                                <h1>Meeting</h1>
                            </div>
                            <div className="w-25 pl-2 pt-2 pr-2 pb-2 border-2 border-black shadow-2xl rounded-lg">
                                <h1>Doc Review</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 h-60 bg-white border-gray-200 rounded-md shadow-2xl">
                        <div className="border-b pl-4 pt-2 pb-2 border-gray-200">
                            <h1 className="font-bold text-gray-200">Previous Meetings</h1>
                        </div>
                        <div className="pl-5 pt-3 pr-5">
                            <div>
                                <div className="flex space-x-40 pt-3 pb-3 border-b border-gray-200 ">
                                    <h1 className="font-bold">1</h1>
                                    <h1 className="font-bold pl-4">22 Feb, 2022</h1>
                                </div>
                                <div className="flex space-x-40 pt-3 pb-3 border-b border-gray-200 ">
                                    <h1 className="font-bold">2</h1>
                                    <h1 className="font-bold pl-3">26 Feb, 2022</h1>
                                </div>
                                <div className="flex space-x-40 pt-3 pb-3 border-b border-gray-200 ">
                                    <h1 className="font-bold">3</h1>
                                    <h1 className="font-bold pl-2">1 March, 2022</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Dashboard;