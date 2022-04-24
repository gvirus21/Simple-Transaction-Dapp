import React from "react";

const HomePage = ({ message, isOwner }) => {
  return (
    <div className=" flex flex-col justify-center items-center h-1/2 w-screen my-9 px-24">
      <h1 className="font-semibold text-3xl py-6">{message}</h1>
      <h2 className="text-xl py-3">ETH Balance: 69 ETH</h2>
      <div className="flex items-center m-10">
        <input
          type="text"
          className="my-3 mx-8 text-2xl px-2 py-1 border-2 border-black rounded-md"
        />
        <button className="bg-cyan-900 w-36 h-10 rounded-md text-white">
          Set Message
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          className="my-3 mx-8 text-2xl px-2 py-1 border-2 border-black rounded-md"
        />
        <button className="bg-cyan-900 w-36 h-10 rounded-md text-white">
          Deposit
        </button>
      </div>

      {isOwner ? (
        <button className="bg-cyan-900 w-36 h-10 rounded-md text-white m-20">
          Withdraw
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HomePage;
