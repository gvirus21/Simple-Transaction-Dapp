import Nav from "../components/nav";
import HomePage from "../components/home";
import { useState, useEffect } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("0xCh9..08c");
  const [message, setMessage] = useState("Hello");
  const [depositAmount, setDepositAmount] = useState(0);
  const [isOwner, setIsOwner] = useState(true);

  return (
    <div>
      <Nav isConnected={isConnected} setIsConnected={setIsConnected} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
      <HomePage
        message={message}
        isOwner={isOwner}
        setMessage={setMessage}
        depositAmount={depositAmount}
        setDepositAmount={setDepositAmount}
      />
    </div>
  );
}
