import React from "react";
import { useGlobalContext } from "../context/context";
import iconAlert from "../icons/alert.png";
import iconClose from "../icons/close-cross.png";
import { conditions } from "../data/Data";

const ConditionsModal = () => {
  const { isCModalOpen, setIsCModalOpen, checkModal } = useGlobalContext();

  return (
    <div
      className={`${
        isCModalOpen ? "modal-conditions open-con-modal" : "modal-conditions"
      }`}
    >
      <div className="conditions-container">
        <div className="conditions-header">
          <h2>General Terms and Conditions</h2>
        </div>

        <ul className="conditions-info">
          {conditions.map((rule, index) => {
            return (
              <li key={index}>
                <img src={iconAlert} alt="" />
                <p>{rule}</p>
              </li>
            );
          })}
        </ul>
        <button
          className="cond-close-btn"
          onClick={() => {
            setIsCModalOpen(false);
            checkModal();
          }}
        >
          <img src={iconClose} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ConditionsModal;
