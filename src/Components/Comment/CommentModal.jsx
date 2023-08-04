import React from "react";
import {Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

const CommentModal = (onClose, isOpen)=>{
    return(
        <div>
              <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          <ModalBody>
           <div className="flex h-[75vh]">
            <div className="w-[45%] flex flex-col justify-center px-5">
                <img className="max-h-full w-full " src="https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_640.jpg" alt="" />
            </div>
            <div className="border w-[55%]">
                <div className="flex items-center">
                    <div>
                        <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2023/06/25/08/46/woman-8086721_640.jpg" alt="profiel" />
                    </div>
                    <div className="ml-2">
                        <p>Username</p>
                    </div>
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