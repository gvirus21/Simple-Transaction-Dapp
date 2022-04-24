import React from "react";

const Nav = ({ isConnected }) => {
  return (
    <div className="flex justify-between items-center px-20 h-32 w-screen">
      <h1 className="text-2xl font-bold font-mono">Transaction Dapp</h1>
      <div>
        {isConnected ? (
          <div className="bg-violet-900 px-5 py-2 rounded-md">
            {" "}
            <p className="text-white ">0xCh9..08c</p>
          </div>
        ) : (
          <button className="px-4 py-2 bg-sky-900 text-white rounded-md">
            {" "}
            connect{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
