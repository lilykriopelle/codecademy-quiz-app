import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";

export default function NewTopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    // dispatch your add topic action here
    history.push(ROUTES.topicsRoute());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic-name">Topic name</label>
      <input
        id="topic-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <button>Add Topic</button>
    </form>
  );
}
