import React, { useState } from "react";

import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();

  const handleTabClick = (title)=>{
    setActiveTab(title)
    if(title==="Profile"){
      navigate("/username")
    }
    else if(title==="Home"){
      navigate("/")
    }
  }
  return (
    <div className="sticky top-0 h-[100vh] w-80">
      <div className="flex flex-col justify-between h-full px-6">
      <div>
        <div className="pt-10">
          <img className="w-40" src="https://i.imgur.com/zqpwkLQ.png" alt="" />
        </div>
        <div className="mt-12">
          {menu.map((item) => {
            return (
              <div onClick={()=>handleTabClick(item.title)} className="flex items-center cursor-pointer mb-5 text-lg">
                {activeTab===item.title? item.activeIcon: item.icon}
                <p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center cursor-pointers pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          <p className="ml-5">More</p>
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
