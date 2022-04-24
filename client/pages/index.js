import Nav from "../components/nav";
import HomePage from "../components/home";
import { useState, useEffect } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div>
      <Nav isConnected={isConnected} />
      <HomePage />
    </div>
  );
}
