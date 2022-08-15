import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState(-1);

  return (
    <ModalContext.Provider
      value={[
        isPledgeModalOpen,
        isConfirmationModalOpen,
        setIsPledgeModalOpen,
        setIsConfirmationModalOpen,
        selectedPledge,
        setSelectedPledge,
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
};
