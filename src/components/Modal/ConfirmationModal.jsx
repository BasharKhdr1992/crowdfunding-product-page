import React, { useContext } from "react";
import "./ConfirmationModal.css";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import iconCheck from "../../images/icon-check.svg";
import { ModalContext } from "../../context/ModalContext";
import Modal from "./Modal";

const ConfirmationModal = () => {
  const [, , , setIsConfirmationModal] = useContext(ModalContext);

  return (
    <Modal>
      <div className="confirmation-modal">
        <img src={iconCheck} className="mb" alt="check" title="check" />
        <h2 className="mb">Thanks for your support!</h2>
        <div className="mb">
          <Paragraph>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </Paragraph>
        </div>
        <div className="mb block">
          <Button
            className={"btn btn-primary"}
            onClick={() => setIsConfirmationModal(false)}
          >
            <div className="pt pb">
              <span className="btn-title">Got it!</span>
            </div>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
