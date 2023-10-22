import "./style.css";

function App() {
  return (
    <>
      <h1>Data Counter</h1>
      <Counter />
    </>
  );
}

function Counter() {
  return (
    <div>
      <div className="buttons">
        <button>-</button>
        <span>Step: </span>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
