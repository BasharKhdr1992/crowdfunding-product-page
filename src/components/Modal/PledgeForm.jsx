import React, { useState } from "react";
import "./PledgeForm.css";
import Paragraph from "../UI/Paragraph";
import Button from "../UI/Button";

const PledgeForm = ({ reward, onClick }) => {
  const [pledge, setPledge] = useState(reward.pledge);

  return (
    <div className="pledge-form">
      <Paragraph>Enter your pledge</Paragraph>
      <div className="form">
        <div className="input-value">
          <span className="dollar">$</span>
          <input
            type="number"
            onChange={(e) => setPledge(+e.target.value)}
            defaultValue={reward.pledge}
            min={reward.pledge}
          />
        </div>
        <Button
          className="btn btn-primary"
          onClick={() => onClick({ rewardId: reward.id, pledge })}
        >
          <span className="btn-title">Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default PledgeForm;
