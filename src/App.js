import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [specific,setSpecific] = useState();
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = (value) => {
    console.log(value);
    setSpecific(value);
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: value,
        text: inputValue,
        sender: 'user',
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };


  const addChatBox = () => {
    const newChatBox = {
      id: Date.now(),
      sender: 'User',
      message: '',
    };
  
    setChatMessages((prevMessages) => [...prevMessages, newChatBox]);
  };


  return (
    <>
      <div className="app">
        <div className="head">
          <h2>Chat Box</h2>
          <button onClick={addChatBox}>Add Chat Box</button>
        </div>
        <div className="body">
          {chatMessages.map((chat,index) => (
            <div key={index} className="chatbox">
            <div className="messages">
              {messages.map((message,index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <h4  style={{ textAlign: chat.id === specific  ? 'right' : 'left' }}>{message.text}</h4>
                </div>
              ))}
              
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button onClick={()=>handleSendMessage(chat.id)}>Send</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
