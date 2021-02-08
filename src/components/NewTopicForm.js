import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addTopic } from '../features/topics/topicsSlice'
import { v4 as uuidv4 } from 'uuid'

export default function NewTopicForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTopic({ name: name, id: uuidv4() }))
    history.push('/topics')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='topic-name'>Topic name</label>
      <input
        id='topic-name'
        type='text'
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <button>Add Topic</button>
    </form>
  );
}
