import Nav from "../components/nav";
import HomePage from "../components/home";
import { useState, useEffect } from "react";
const { etheres } = require("ethers");

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("0xCh9..08c");
  const [message, setMessage] = useState("Hello");
  const [depositAmount, setDepositAmount] = useState(0);
  const [isOwner, setIsOwner] = useState(true);

    if (window.ethereum) {
    const provider = new etheres.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contractAddress = '0x...88';
  }

  useEffect(() => {
    handleReload();
  }, []);

  const handleReload = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts[0] != undefined) {
        setCurrentAccount(accounts[0]);
        setIsConnected(true);
      }
    }
  };

  const getBalance = async () => {
    const balance = await provider.getBalance(contractAddress)
    const balanceFormatted = etheres.utils.formatEther(balance)
    

  }

  return (
    <div>
      <Nav
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <HomePage
        isConnected={isConnected}
        message={message}
        isOwner={isOwner}
        setMessage={setMessage}
        depositAmount={depositAmount}
        setDepositAmount={setDepositAmount}
      />
    </div>
  );
}
