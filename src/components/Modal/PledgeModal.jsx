import React, { useContext } from "react";
import Modal from "./Modal";
import "./PledgeModal.css";
import PledgeForm from "./PledgeForm";
import Paragraph from "./../UI/Paragraph";
import close from "../../images/icon-close-modal.svg";
import Radio from "./../UI/Radio";
import { ModalContext } from "../../context/ModalContext";
import Button from "../UI/Button";
const PledgeModal = ({ incrementBackers, confirmPledge, rewards }) => {
  const [
    ,
    ,
    setIsPledgeModalOpen,
    setIsConfirmationModalOpen,
    selectedPledge,
    setSelectedPledge,
  ] = useContext(ModalContext);

  return (
    <Modal>
      <div className="pledge-modal-header">
        <h4>Back this project</h4>
        <img
          src={close}
          alt="close"
          title="close"
          onClick={() => setIsPledgeModalOpen(false)}
        />
      </div>
      <Paragraph>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </Paragraph>
      <div className="pledges">
        <div
          className={`pledge ${
            selectedPledge === 0 ? "selected-pledge" : undefined
          }`}
        >
          <div className="pledge-main">
            <div className="pledge-h no-reward">
              <Radio value={"0"} onClick={() => setSelectedPledge(0)} />
              <h3 className="pledge-title">Pledge with no reward</h3>
            </div>
            <Paragraph>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Paragraph>
            {selectedPledge === 0 && (
              <div className="margin-top">
                <Button
                  className="btn btn-primary"
                  onClick={() => {
                    incrementBackers();
                    setIsPledgeModalOpen(false);
                    setIsConfirmationModalOpen(true);
                  }}
                >
                  <div className="padded-top padded-bottom">
                    <span className="btn-title">Continue</span>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
        {rewards.map((reward) => {
          const disabled = reward.amount === 0;

          return (
            <div
              className={`pledge ${
                selectedPledge === reward.pledge ? "selected-pledge" : undefined
              } ${disabled ? "disabled" : undefined}`}
              key={reward.id}
            >
              <div className="pledge-main">
                <div className="pledge-h">
                  <div className="p-h-left">
                    <Radio
                      disabled={disabled}
                      value={reward.id}
                      checked={reward.id === selectedPledge}
                      onClick={() => setSelectedPledge(reward.id)}
                    />
                    <div className="radio-desc">
                      <h3 className="pledge-title">{reward.title}</h3>
                      <p className="pledge-amount">
                        Pledge ${reward.pledge} or more
                      </p>
                    </div>
                  </div>
                  <div className="collapse">
                    <div className="quantity">
                      <h3 className="quantity-1">{reward.amount}</h3>
                      <span>left</span>
                    </div>
                  </div>
                </div>
                <Paragraph>{reward.desc}</Paragraph>
                <div className="mobile">
                  <div className="quantity">
                    <h3 className="quantity-1">{reward.amount}</h3>
                    <span>left</span>
                  </div>
                </div>
              </div>
              {selectedPledge === reward.id && !disabled && (
                <PledgeForm
                  reward={reward}
                  onClick={(data) => {
                    confirmPledge(data);
                    setIsPledgeModalOpen(false);
                    setIsConfirmationModalOpen(true);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default PledgeModal;
