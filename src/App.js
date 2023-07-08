import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      //number > 3
      return 0;
    }
    if (number < 0) {
      // number < 0
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      //ocemo da izbegnemo prikaz iste osobe
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <main className="main-wrapper">
      <article className="article-wrapper">
        <div className="div-img">
          <img src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-button" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn-supprise" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
