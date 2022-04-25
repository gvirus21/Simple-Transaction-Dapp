import React from "react";
import { useEffect } from "react";

const HomePage = ({
  message,
  isOwner,
  setMessage,
  depositAmount,
  setDepositAmount,
}) => {
  useEffect(() => {
  }, [message]);

  const updateMessage = () => {
    // will change message string in smartcontract
  };

  const makeDeposit = () => {
    // will make a deposit request
  };

  const withdraw = () => {
    // will make withdraw from contract
  };

  return (
    <div className=" flex flex-col justify-center items-center h-1/2 w-screen my-9 px-24">
      <h1 className="font-semibold text-3xl py-6">
        Message imported from contract
      </h1>
      <h2 className="text-xl py-3">ETH Balance: 69 ETH</h2>
      <div className="flex items-center m-10">
        <input
          type="text"
          className="my-3 mx-8 text-2xl px-2 py-1 border-2 border-black rounded-md"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="bg-cyan-900 w-36 h-10 rounded-md text-white"
          onClick={updateMessage}
        >
          Set Message
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          className="my-3 mx-8 text-2xl px-2 py-1 border-2 border-black rounded-md"
          value={depositAmount}
          onChange={(e) => {
            setDepositAmount(e.target.value);
          }}
        />
        <button
          className="bg-cyan-900 w-36 h-10 rounded-md text-white"
          onClick={makeDeposit}
        >
          Deposit
        </button>
      </div>

      {isOwner ? (
        <button
          className="bg-cyan-900 w-36 h-10 rounded-md text-white m-20"
          onClick={withdraw}
        >
          Withdraw
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HomePage;
