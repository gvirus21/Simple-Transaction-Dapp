import React from "react";

const Nav = ({ isConnected, setIsConnected, currentAccount, setCurrentAccount }) => {

  const handleConnect = async () => {
    if (window.ethereum !== undefined) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" }) 
      
      if (accounts) {
        setCurrentAccount(accounts[0])
        setIsConnected(true)
      }
    } else {
      alert("Please install Metamask")
    }
  };

  return (
    <div className="flex justify-between items-center px-20 h-32 w-screen">
      <h1 className="text-2xl font-bold font-mono">Transaction Dapp</h1>
      <div>
        {isConnected ? (
          <div className="bg-violet-900 px-5 py-2 rounded-md">
            {" "}
            <p className="text-white ">{`${currentAccount.substr(0,5)}....${currentAccount.substr(-4)}`}</p>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-sky-900 text-white rounded-md"
            onClick={handleConnect}
          >
            connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
