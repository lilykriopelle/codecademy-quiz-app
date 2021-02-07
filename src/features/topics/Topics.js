import NewTopicForm from '../../components/NewTopicForm'
import { useDispatch, useSelector } from 'react-redux';
import { selectTopics } from './topicsSlice'

export default function Topics() {
  const topics = useSelector(selectTopics)
  debugger
  return (
    <>
      <h2>Topics</h2>
      <NewTopicForm/>
      {Object.values(topics).map(topic => <div>{topic.name}</div>)}
    </>
  );
}
