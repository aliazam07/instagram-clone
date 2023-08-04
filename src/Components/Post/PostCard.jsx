import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./PostCard.css";
import CommentModal from "../Comment/CommentModal";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLike, setIsPostLike] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleIsSaved = () => {
    setIsSaved(!isSaved);
  };
  const handlePostLike = () => {
    setIsPostLike(!isPostLike);
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_640.jpg"
              alt="new_post"
            />

            <div className="pl-2">
              <p className="font-semibold text-sm">username</p>
              <p className="font-thin text-sm">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/05/19/12/31/nuthatch-8004440_640.jpg"
            alt="first_post"
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex space-x-10">
            {isPostLike ? (
              <AiFillHeart
                className="text-2xl text-red-600 cursor-pointer hover:opacity-50"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart
                className="cursor-pointer text-2xl"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment className="text-2xl cursor-pointer hover:opacity-50" />
            <RiSendPlaneLine className="text-2xl cursor-pointer hover:opacity-50" />
          </div>
          <div>
            {isSaved ? (
              <BsBookmarkFill className="text-2xl cursor-pointer hover:opacity-50" onClick={handleIsSaved} />
            ) : (
              <BsBookmark className="text-2xl cursor-pointer hover:opacity-50" onClick={handleIsSaved} />
            )}
          </div>
        </div>
        <div  className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">10 comments</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex justify-between items-center px-5 py-3">
            <input className="commentInput" type="text" placeholder="Add a comment..." />
            <BsEmojiSmile />
          </div>
        </div>
      </div>
      <CommentModal />
    </div>
  );
};

export default PostCard;
