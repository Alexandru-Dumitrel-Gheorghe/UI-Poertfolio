import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatBot.module.css';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hallo! Wie kann ich dir heute helfen?' }
  ]);
  const [input, setInput] = useState('');
  const chatboxRef = useRef(null);

  // API-Key from .env
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  console.log('API KEY from .env:', API_KEY);

  // Send message to ChatGPT
  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    const userMessage = input.trim();
    setMessages([...messages, { sender: 'user', text: userMessage }]);
    setInput('');
    // Add a temporary message "Denke nach..."
    setMessages(prev => [...prev, { sender: 'bot', text: 'Denke nach...' }]);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: userMessage }],
        }),
      });

      const data = await response.json();
      const botResponse = data.choices?.[0]?.message?.content || 'Fehler in der Antwort.';
      setMessages(prev => [...prev.slice(0, -1), { sender: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: 'Ups! Etwas ist schief gelaufen. Bitte versuche es erneut.' },
      ]);
    } finally {
      // Scroll to the latest message
      chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.container}>
      {/* Toggle button */}
      <button
        className={`${styles.chatbotToggler} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Chatbot schließen' : 'Chatbot öffnen'}
      >
        <FaRobot />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className={styles.chatbot}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <header className={styles.header}>
                <h2 className={styles.title}>Chatbot</h2>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                  aria-label="Chatbot schließen"
                >
                  <FaTimes />
                </button>
              </header>

              {/* Info section */}
              <div className={styles.info}>
                <p>
                  Dieser Chatbot wurde mit der OpenAI API erstellt und bietet Echtzeit-Unterstützung.
                  Er ist in mein Portfolio integriert, um meine Fähigkeiten in der Entwicklung interaktiver Webanwendungen zu demonstrieren.
                </p>
              </div>

              {/* Message list */}
              <ul ref={chatboxRef} className={styles.chatbox}>
                {messages.map((msg, index) => (
                  <motion.li
                    key={index}
                    className={msg.sender === 'user' ? styles.outgoing : styles.incoming}
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {msg.sender === 'bot' && <span className={styles.botIcon}>🤖</span>}
                    <p>{msg.text}</p>
                  </motion.li>
                ))}
              </ul>

              {/* Input area */}
              <div className={styles.chatInput}>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Schreibe eine Nachricht..."
                  rows={1}
                  onKeyPress={handleKeyPress}
                  aria-label="Nachricht eingeben"
                />
                <button
                  onClick={handleSendMessage}
                  className={styles.sendButton}
                  aria-label="Nachricht senden"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
