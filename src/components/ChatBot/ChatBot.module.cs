.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.pageTitle {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #fff;
}

.chatLayout {
  display: flex;
  gap: 2rem;
}

.sidebar {
  width: 250px;
  background: #2c2f33;
  border-radius: 8px;
  padding: 1rem;
}

.newChatButton {
  width: 100%;
  padding: 0.75rem;
  background: #7289da;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chatContainer {
  flex: 1;
}

.chatHeader {
  background: #7289da;
  padding: 1rem;
  border-radius: 8px 8px 0 0;
}

.chatbox {
  height: 400px;
  overflow-y: auto;
  background: #23272a;
  padding: 1rem;
  border-radius: 0 0 8px 8px;
}

.chat {
  padding: 0.5rem;
  background: #444;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.outgoing {
  background: #7289da;
  text-align: right;
}

.chatInput {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.chatInput textarea {
  flex: 1;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.sendButton, .voiceButton {
  background: #7289da;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
