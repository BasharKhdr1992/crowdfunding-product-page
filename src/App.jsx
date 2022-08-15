import "./App.css";
import { useContext, useState } from "react";
import { ModalContext } from "./context/ModalContext";
import Header from "../src/components/header/Header";
import Main from "./components/main/Main";
import PledgeModal from "./components/Modal/PledgeModal";
import ConfirmationModal from "./components/Modal/ConfirmationModal";
import { rewards as rewardsDefault } from "./data/rewards";

const App = () => {
  const [
    isPledgeModalOpen,
    isConfirmationModalOpen,
    setIsPledgeModalOpen,
    ,
    ,
    setSelectedPledge,
  ] = useContext(ModalContext);

  const [backedMoney, setBackedMoney] = useState(75565);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [rewards, setRewards] = useState(rewardsDefault);

  const incrementBackers = () => setTotalBackers((prev) => prev + 1);

  const confirmPledge = (data) => {
    const { rewardId, pledge } = data;

    setBackedMoney((prev) => prev + pledge);
    setTotalBackers((prev) => prev + 1);

    setRewards((prev) => {
      return prev.map((reward) => {
        if (reward.id === rewardId) {
          console.log("I am here!");
          return { ...reward, amount: reward.amount - 1 };
        }

        return reward;
      });
    });
  };

  const toggleModal = () => {
    setSelectedPledge(-1);
    setIsPledgeModalOpen(true);
  };

  return (
    <div className="wrapper">
      <Header />
      <Main
        backedMoney={backedMoney}
        totalBackers={totalBackers}
        rewards={rewards}
        toggleModal={toggleModal}
      />
      {isPledgeModalOpen && (
        <PledgeModal
          rewards={rewards}
          confirmPledge={confirmPledge}
          incrementBackers={incrementBackers}
        />
      )}
      {isConfirmationModalOpen && <ConfirmationModal />}
    </div>
  );
};

export default App;
