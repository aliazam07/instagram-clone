import React from "react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommentLiked, setIsCommentLiked] = useState();
  const handleCommentLike = () =>{
    setIsCommentLiked(!isCommentLiked);
  }
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              className="h-9 w-9 rounded-full"
              src="https://media.istockphoto.com/id/1421122424/photo/cycling-in-france-angers-chateau.webp?b=1&s=612x612&w=0&k=20&c=gO99xrwTg9JWKoy6OD-DxAlX42EkkxK83Xx-XNOHuNM="
              alt="castle"
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">Love Angel</span>
              <span className="ml-2">Nice Pic</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60">
              <span>1 min ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>
        {isCommentLiked ? (
          <AiFillHeart onClick={handleCommentLike} className="text-xs hover:opacity-50 text-red-500 cursor-pointer" />
        ) : (
          <AiOutlineHeart onClick={handleCommentLike} className="text-xs hover:opacity-50 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default CommentCard;
