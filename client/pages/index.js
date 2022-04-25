import Nav from "../components/nav";
import HomePage from "../components/home";
import { useState, useEffect } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(true);
  const [message, setMessage] = useState("Hello");
  const [depositAmount, setDepositAmount] = useState(0);
  const [isOwner, setIsOwner] = useState(true);

  return (
    <div>
      <Nav isConnected={isConnected} />
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
