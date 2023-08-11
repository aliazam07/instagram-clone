import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { BsThreeDots, BsBookmark, BsBookmarkFill,  } from "react-icons/bs";
import { RiSendPlaneLine} from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { FaRegComment} from "react-icons/fa";

import CommentCard from "./CommentCard";

const CommentModal = (onClose, isOpen, isSaved, isPostLike, handleIsSaved, handlePostLike,) => {
 
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center px-5">
                <img
                  className="max-h-full w-full "
                  src="https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_640.jpg"
                  alt=""
                />
              </div>
              <div className=" w-[55%] pl-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://cdn.pixabay.com/photo/2023/06/25/08/46/woman-8086721_640.jpg"
                        alt="profiel"
                      />
                    </div>
                    <div className="ml-2">
                      <p>Username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                  <div>
                    {[1,1,1,1].map(()=> <CommentCard />)}
                  </div>
                  <div className="flex justify-between items-center w-full  py-4">
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
        <div  className="w-full py-2">
          <p>10 likes</p>
          <p className="opacity-50">1 day ago</p>
        </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
