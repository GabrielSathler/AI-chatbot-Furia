import "./Landing.css";
import background from "./assets/furiaBackground.webp";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <header className="navbar">
        <div className="logo">FURIA</div>
        <nav>
          <a href="#chatbot">Chatbot</a>
        </nav>
      </header>

      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="hero-content">
          <h1>Orgulho do Brasil no E-Sports</h1>
          <p>Saiba mais sobre o maior time de E-Sports do Brasil!</p>
          <p>Pergunte ao nosso chatbot o que quer saber!</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
