import { useEffect } from "react";
function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}
export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    
    return ()=>{
      connection.disconnect()
    }
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
