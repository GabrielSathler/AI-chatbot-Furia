import Chatboticon from "./components/Chatboticon"

const App = () => {
  return (
    <div className="container">
      FAZER A LANDING PAGE DEPOIS
      <div className="chatbot-popup">
        {/*HEADER DO CHATBOT*/}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon/>
            <h2 className="logo-text">FuriaAI</h2>
          </div>
          {/*consertar depois*/} 
          <button className="material-symbols-outlined">
            keyboard_arrow_down 
          </button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <Chatboticon/>
            <p className="message-text">
              Olá fã!👋 <br/> sou o Chatbot da Furia! Me pergunte o que quer saber! Sobre a maior ORG de E-Sports do Brasil! 🐼
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/*FOOTER DO CHATBOT*/}
        <div className="chat-footer">
          <form action="" className="chat-form">
            <input type="text" placeholder="mensagem..." className="message-input" required/>
            <button className="material-symbols-outlined">arrow_upward</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App