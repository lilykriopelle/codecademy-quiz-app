import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function NewQuizForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [cards, setCards] = useState([])
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    // for each card in local state, create an id for the card and dispatch an action to add the card to the store
    //
    // dispatch an action here to add your quiz to the store
    history.push('/quizzes')
  }

  const addCard = e => {
    e.preventDefault()
    setCards(cards.concat({ front: '', back: '' }))
  }

  const removeCard = (e, index) => {
    e.preventDefault()
    setCards(cards.filter((card, i) => index !== i))
  }

  const updateCardState = (index, side, value) => {
    const newCards = cards.slice()
    newCards[index][side] = value
    setCards(newCards)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Quiz</h2>
      <label htmlFor='quiz-name'>Name</label>
      <input id='quiz-name' value={name} onChange={e => setName(e.currentTarget.value)}/>

      {
        cards.map((card, index) => (
          <div>
            <label htmlFor={`card-front-${index}`}>Front</label>
            <input id={`card-front-${index}`} value={cards[index].front} onChange={e => updateCardState(index, 'front', e.currentTarget.value)}/>

            <label htmlFor={`card-back-${index}`}>Back</label>
            <input id={`card-back-${index}`} value={cards[index].back} onChange={e => updateCardState(index, 'back', e.currentTarget.value)}/>

            <button onClick={e => removeCard(e, index)}>removeCard</button>
          </div>
        ))
      }
      <button onClick={addCard}>Add a Card</button>
    </form>
  );
}
