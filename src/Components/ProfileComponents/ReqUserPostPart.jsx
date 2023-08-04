import React, { useState } from "react";
import {AiOutlineTable, AiOutlineUser} from "react-icons/ai";
import { RiVideoAddLine} from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from "./ReqUserPostCard";

const ReqUserPostPart = () =>{
    const [activeTab, setActiveTab] = useState();
    const tabs = [
        {
            tab:"POST",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeIcon:""
        },
        {
            tab:"REELS",
            icon:<RiVideoAddLine></RiVideoAddLine>,
            
        },
        {
            tab:"SAVED",
            icon:<BiBookmark></BiBookmark>,
           
        },
        {
            tab:"TAGGED",
            icon:<AiOutlineUser> </AiOutlineUser>
        }
    ]

    return(
        <div>
            <div className="flex space-x-14 border-t relative justify-center ">
                {tabs.map((item)=>
                    <div onClick={()=>setActiveTab(item.tab)} className={`${activeTab===item.tab?"border-t border-black":"opacity-60"} flex text-center cursor-pointer py-2 `}>
                        <p className="mt-1">{item.icon}</p>
                        <p className="ml-1">{item.tab}</p>
                    </div>
                )}
            </div>
            <div>
                <div className="flex flex-wrap justify-center">
                    {[1,1,1,1,1,1].map((item)=><ReqUserPostCard />)}
                </div>

            </div>
        </div>
    );
};

export default ReqUserPostPart;