import { useState, useRef, useEffect } from "react";
import Chatboticon from "./components/Chatboticon"
import ChatForm from "./components/ChatForm"
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState([false]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    //função auxiliar para poder atualizar o historico do chat
    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Pensando..."), {role: "model", text}]);
    } 

    //formata o historico do chat para a request da API
    history = history.map(({role, text})=> ({role, parts: [{text}]}));

    const requestOpitions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({contents: history})
    }

    try {
      //faz a chamada da API para que o bot responda

      const response  = await fetch(import.meta.env.VITE_API_URL, requestOpitions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Alguma coisa deu errado!");

      //limpa e atualiza o historico do chat com a resposta do bot
      const  apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() =>{
    //Scroll automatico para quando o historico atualizar

    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot": ""}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>

      {/*FAZER A LANDING PAGE DEPOIS*/}

      <div className="chatbot-popup">
        {/*HEADER DO CHATBOT*/}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon/>
            <h2 className="logo-text">FuriaAI</h2>
          </div>
          <button className="material-symbols-outlined">
            keyboard_arrow_down 
          </button>
        </div>
        {/*CHATBOT BODY*/}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <Chatboticon/>
            <p className="message-text">
              Olá fã!👋 <br/> sou o Chatbot da Furia! Me pergunte o que quer saber! Sobre a maior ORG de E-Sports do Brasil! 🐼
            </p>
          </div>  
          {/*RENDERIZA O CHAT DO USUARIO*/}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat}/>
          ))}
        </div>

        {/*FOOTER DO CHATBOT E HISTORICO DE CONVERSA*/}
        <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  )
}

export default App