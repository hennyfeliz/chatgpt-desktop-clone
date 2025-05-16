import React, { useState } from "react";
import "../styles/chat.css";
import { InputText } from "./inputText";
import { invoke } from "@tauri-apps/api/tauri";
import { formatThinking } from "../utils/functions";
import chatgpt from "../assets/images/chatgpt.png";
import user from "../assets/images/user.png";

export const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<{ id: 1 | 2; text: string }[]>([]);

  const handleSend = async () => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { id: 1, text }]);
    const prompt = text;
    setText("");

    try {
      const reply: string = await invoke("ask_llm", { prompt });
      setMessages((m) => [...m, { id: 2, text: reply }]);
    } catch (err) {
      setMessages((m) => [...m, { id: 2, text: `Error: ${String(err)}` }]);
    }
  };

  return (
    <div className="chat">
      {messages.length === 0 && (
        <div className="welcome">
          <h1>Write something to start a conversation...</h1>
        </div>
      )}
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`message ${msg.id === 1 ? "sent" : "received"}`}
        >
          {msg.id === 1 ? (
            <>
              <img className="image_" src={user} />
              {formatThinking(msg.text)}
            </>
          ) : (
            <>
              <img className="image_" src={chatgpt} />
              {formatThinking(msg.text)}
            </>
          )}
          {/* {formatThinking(msg.text)} */}
        </div>
      ))}
      <div className="inputText">
        <InputText text={text} onTextChange={setText} onSend={handleSend} />
      </div>
    </div>
  );
};
