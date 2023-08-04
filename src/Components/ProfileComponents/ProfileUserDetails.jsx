import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className="py-10">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2022/11/29/03/46/woman-7623567_640.jpg"
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button className="bg-slate-200 px-2 font-bold rounded">
              Edit Profile
            </button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">20</span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">150</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p>Md Ali Azam</p>
            <p>Live Today 😊 Tomorrow Is Not Guaranteed 😅</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
