import { useState } from "react";
import { sculptureList } from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNext() {
    index >= 11 ? null : setIndex(index + 1);
  }

  function handlePrevious() {
    index >= 1 ? setIndex(index - 1) : null;
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "hide" : "Show"} details
      </button>

      {/* if showMore is true then show the p. */}
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

export default App;
