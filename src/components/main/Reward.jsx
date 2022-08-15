import React, { useContext } from "react";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";
import "./Reward.css";
import { ModalContext } from "../../context/ModalContext";

const Reward = ({ reward, disabled }) => {
  const [, , setIsPledgeModalOpen, , , setSelectedPledge] =
    useContext(ModalContext);

  const selectPledge = (id) => {
    setSelectedPledge(id);
    setIsPledgeModalOpen(true);
  };

  return (
    <div className={`reward ${disabled ? "disabled" : undefined}`}>
      <div className="reward-h">
        <h4>{reward.title}</h4>
        <p>Pledge ${reward.pledge} or more</p>
      </div>
      <Paragraph>{reward.desc}</Paragraph>
      <div className="reward-footer">
        <div className="amount">
          <span className="amount-1">{reward.amount}</span>
          <span>left</span>
        </div>
        <Button
          disabled={disabled}
          onClick={() => selectPledge(reward.id)}
          className={`btn btn-primary ${disabled ? "btn-disabled" : undefined}`}
        >
          <span className="btn-title">Select Reward</span>
        </Button>
      </div>
    </div>
  );
};

export default Reward;
