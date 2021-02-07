import React, { useState } from 'react';
import { addTopic } from '../features/topics/topicsSlice'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function NewTopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTopic({ name: name, id: uuidv4() }))
    setName('')
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
