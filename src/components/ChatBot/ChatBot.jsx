import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ChatBot.module.css";
import { FaPaperPlane, FaMicrophone, FaPlus } from "react-icons/fa";

/** Indicator de tastare */
const TypingIndicator = () => (
  <div className={styles.typingIndicator}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

/** Lista de sesiuni de chat */
const ChatSessionList = ({ sessions, activeSessionId, onSelectSession, onNewChat }) => {
  return (
    <motion.aside 
      className={styles.sidebar}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <button className={styles.newChatButton} onClick={onNewChat}>
        <FaPlus /> Neuer Chat
      </button>
      <div className={styles.chatList}>
        {sessions.map((session) => (
          <button
            key={session.id}
            className={`${styles.chatSession} ${session.id === activeSessionId ? styles.activeSession : ""}`}
            onClick={() => onSelectSession(session.id)}
          >
            {session.title}
          </button>
        ))}
      </div>
    </motion.aside>
  );
};

/** Fereastra de chat */
const ChatWindow = ({ chat, chatboxRef }) => {
  return (
    <motion.div 
      className={styles.chatbot}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className={styles.chatHeader}>
        <h2>{chat?.title || "Kein Chat ausgewählt"}</h2>
      </header>
      <ul className={styles.chatbox} ref={chatboxRef}>
        {chat?.messages.map((msg) => (
          <motion.li
            key={msg.id}
            className={`${styles.chat} ${styles[msg.sender]}`}
            initial={{ opacity: 0, x: msg.sender === "outgoing" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.sender === "incoming" && <span className={styles.iconBot}>🤖</span>}
            {typeof msg.text === "object" ? msg.text : <p>{msg.text}</p>}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

/** Input pentru chat */
const ChatInput = ({ inputText, onInputChange, onSend, onKeyDown, onVoiceInput, isListening }) => {
  return (
    <div className={styles.chatInput}>
      <textarea
        placeholder="Nachricht eingeben..."
        spellCheck="false"
        value={inputText}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      ></textarea>
      <button onClick={onSend} className={styles.sendButton} disabled={!inputText.trim()}>
        <FaPaperPlane />
      </button>
      <button onClick={onVoiceInput} className={styles.voiceButton}>
        <FaMicrophone className={isListening ? styles.listening : ""} />
      </button>
    </div>
  );
};

const ChatBot = () => {
  const [chatSessions, setChatSessions] = useState([
    {
      id: Date.now(),
      title: "Chat #1",
      messages: [{ id: Date.now(), sender: "incoming", text: "Hallo, wie kann ich Ihnen helfen?" }],
    },
  ]);
  const [activeChatId, setActiveChatId] = useState(chatSessions[0].id);
  const [inputText, setInputText] = useState("");
  const chatboxRef = useRef(null);

  const currentChat = chatSessions.find((chat) => chat.id === activeChatId);

  const addMessageToCurrentChat = useCallback(
    (message) => {
      setChatSessions((prevSessions) =>
        prevSessions.map((chat) =>
          chat.id === activeChatId ? { ...chat, messages: [...chat.messages, message] } : chat
        )
      );
    },
    [activeChatId]
  );

  const handleSend = () => {
    if (!inputText.trim()) return;
    const outgoingMessage = { id: Date.now(), sender: "outgoing", text: inputText };
    addMessageToCurrentChat(outgoingMessage);
    setInputText("");

    const incomingId = Date.now() + 1;
    const placeholderMessage = { id: incomingId, sender: "incoming", text: <TypingIndicator /> };
    addMessageToCurrentChat(placeholderMessage);

    setTimeout(() => {
      addMessageToCurrentChat({ id: incomingId, sender: "incoming", text: "Ich bin noch in der Entwicklung 😃" });
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Chatbot</h1>
      <div className={styles.chatLayout}>
        <ChatSessionList
          sessions={chatSessions}
          activeSessionId={activeChatId}
          onSelectSession={setActiveChatId}
          onNewChat={() => setChatSessions([...chatSessions, { id: Date.now(), title: `Chat #${chatSessions.length + 1}`, messages: [] }])}
        />
        <div className={styles.chatContainer}>
          <ChatWindow chat={currentChat} chatboxRef={chatboxRef} />
          <ChatInput
            inputText={inputText}
            onInputChange={(e) => setInputText(e.target.value)}
            onSend={handleSend}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
