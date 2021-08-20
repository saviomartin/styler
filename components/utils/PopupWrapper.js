import React from "react";

// material-ui modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Btn from "./Btn";
import { FiX } from "react-icons/fi";

const ModalPopup = ({ open, setOpen, children }) => {
  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="bg-white rounded-xl !shadow-md max-w-[90%] max-h-[90vh] overflow-hidden outline-none relative">
          <div
            className="shadow-sm absolute top-2 right-2 p-[1px] z-[100] rounded-md"
            onClick={() => setOpen(false)}
          >
            <Btn className="!rounded-md">
              <div className="bg-[#ddd] p-2 rounded-md">
                <FiX className="text-xl text-[#444]" />
              </div>
            </Btn>
          </div>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalPopup;
