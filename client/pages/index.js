import Nav from "../components/nav";
import HomePage from "../components/home";
import { useState, useEffect } from "react";
const { ethers } = require("ethers");
import ABI from "./ABI.json";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [currentAccount, setCurrentAccount] = useState("");
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState('')
  const [depositAmount, setDepositAmount] = useState(0);
  const [isOwner, setIsOwner] = useState(true);

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  let provider;
  let signer;
  let contract;

  useEffect(() => {
    handleReload();
    setup();
  }, []);

  const setup = () => {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, ABI, signer);
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
        getBalance();
        getMessage();
      }
    }
  };

  const getBalance = async () => {
    try {
      const balance = await provider.getBalance(contractAddress);
      const balanceFormatted = ethers.utils.formatEther(balance);
      setBalance(balanceFormatted);
    } catch (err) {
      console.error(err);
    }
    
  };

  const getMessage = async () => {
    console.log("get message called");
    try {
      const contractMessage = await contract.message();
      setMessage(contractMessage);
    } catch (err) {
      console.error(err);
    }
  };

  const updateMessage = async (e) => {
    e.preventDefault()
    const changeMessageTx = await contract.changeMessage(inputMessage)
    await changeMessageTx.wait()
    setMessage(inputMessage)
  }

  return (
    <div>
      <Nav
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        setBalance={setBalance}
        getBalance={getBalance}
        getMessage={getMessage}
      />
      <HomePage
        isConnected={isConnected}
        message={message}
        isOwner={isOwner}
        setMessage={setMessage}
        updateMessage={updateMessage}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        depositAmount={depositAmount}
        setDepositAmount={setDepositAmount}
        balance={balance}
      />
    </div>
  );
}
