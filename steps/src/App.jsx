import { useState } from "react";
import "../public/index.css";

export default function App() {
  const messages = [
    "Aprender React ⚛️",
    "Aplicar para vagas 💼",
    "Investir bem seu dinheiro 🤑",
  ];

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Passo {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2", color: "#FFF" }}
              onClick={handlePrevious}
            >
              Anteior
            </button>
            <button
              style={{ backgroundColor: "#7950F2", color: "#FFF" }}
              onClick={handleNext}
            >
              Próximo
            </button>
          </div>
        </div>
      )}
    </>
  );
}
