import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";
        
        //atualiza o chat com a mensagem do usuario
        setChatHistory(history => [...history, { role: "user", text: userMessage }]);

        //adiciona um placeholder "pensando" para a resposta do bot
        setTimeout(() => {
                setChatHistory(history => [...history, { role: "model", text: "Pensando..." }])
                
                // chama a função para gerar a resposta do bot
                generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
            }, 500);
    }

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="mensagem..." className="message-input" required/>
        <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  )
}

export default ChatForm