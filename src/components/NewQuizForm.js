import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";

export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const [topicId, setTopicId] = useState("");
  const history = useHistory();
  const topics = {};
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    // create the new cards here
    // create the new quiz here

    history.push(ROUTES.quizzesRoute());
  };

  const addCardInputs = (e) => {
    e.preventDefault();
    setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e, index) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice();
    newCards[index][side] = value;
    setCards(newCards);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Quiz</h2>
      <label htmlFor="quiz-name">Name</label>
      <input
        id="quiz-name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <label htmlFor="quiz-topic">Topic</label>
      <select
        id="quiz-topic"
        onChange={(e) => setTopicId(e.currentTarget.value)}
      >
        <option value="">---</option>
        {Object.values(topics).map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.name}
          </option>
        ))}
      </select>
      {cards.map((card, index) => (
        <div key={index}>
          <label htmlFor={`card-front-${index}`}>Front</label>
          <input
            id={`card-front-${index}`}
            value={cards[index].front}
            onChange={(e) =>
              updateCardState(index, "front", e.currentTarget.value)
            }
          />

          <label htmlFor={`card-back-${index}`}>Back</label>
          <input
            id={`card-back-${index}`}
            value={cards[index].back}
            onChange={(e) =>
              updateCardState(index, "back", e.currentTarget.value)
            }
          />

          <button onClick={(e) => removeCard(e, index)}>remove card</button>
        </div>
      ))}
      <button onClick={addCardInputs}>Add a Card</button>
      <button>Create Quiz</button>
    </form>
  );
}
