import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatBot.module.css';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ChatBot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: t("chatbot.initialMessage") }
  ]);
  const [input, setInput] = useState('');
  const chatboxRef = useRef(null);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    const userMessage = input.trim();
    setMessages([...messages, { sender: 'user', text: userMessage }]);
    setInput('');
    // Adaugă mesajul temporar "thinking..."
    setMessages(prev => [...prev, { sender: 'bot', text: t("chatbot.thinking") }]);

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
      const botResponse = data.choices?.[0]?.message?.content || t("chatbot.errorResponse");
      setMessages(prev => [...prev.slice(0, -1), { sender: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: t("chatbot.errorMessage") },
      ]);
    } finally {
      chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.chatbotToggler} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t("chatbot.closeAria") : t("chatbot.openAria")}
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
                <h2 className={styles.title}>{t("chatbot.title")}</h2>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                  aria-label={t("chatbot.closeAria")}
                >
                  <FaTimes />
                </button>
              </header>

              <div className={styles.info}>
                <p>{t("chatbot.info")}</p>
              </div>

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

              <div className={styles.chatInput}>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("chatbot.inputPlaceholder")}
                  rows={1}
                  onKeyPress={handleKeyPress}
                  aria-label={t("chatbot.inputAria")}
                />
                <button
                  onClick={handleSendMessage}
                  className={styles.sendButton}
                  aria-label={t("chatbot.sendAria")}
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
