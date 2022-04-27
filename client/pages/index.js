import Nav from "../components/nav";
import HomePage from "../components/home";
import { useState, useEffect } from "react";
const { ethers } = require("ethers");

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(0)
  const [currentAccount, setCurrentAccount] = useState("0xCh9..08c");
  const [message, setMessage] = useState("Hello");
  const [depositAmount, setDepositAmount] = useState(0);
  const [isOwner, setIsOwner] = useState(true);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  let provider;
  let signer;

  useEffect(() => {
    handleReload();
    setup()
  }, []);

  const setup = () => {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
    }
  };

  const handleReload = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts[0] != undefined) {
        setCurrentAccount(accounts[0]);
        setIsConnected(true);
        getBalance()
      }
    }
  };

  const getBalance = async () => {
    const balance = await provider.getBalance(contractAddress);
    const balanceFormatted = ethers.utils.formatEther(balance);
    console.log(balanceFormatted)
    setBalance(balanceFormatted)
  };

  return (
    <div>
      <Nav
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        setBalance={setBalance}
        getBalance={getBalance}
      />
      <HomePage
        isConnected={isConnected}
        message={message}
        isOwner={isOwner}
        setMessage={setMessage}
        depositAmount={depositAmount}
        setDepositAmount={setDepositAmount}
        balance={balance}
      />
    </div>
  );
}
