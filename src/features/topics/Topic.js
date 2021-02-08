import NewTopicForm from '../../components/NewTopicForm'
import { useSelector } from 'react-redux'
import { selectTopics } from './topicsSlice'
import { Link, useParams } from 'react-router-dom'

export default function Topic() {
  const topics = useSelector(selectTopics)
  let { topicId } = useParams()
  const topic = topics[topicId]

  return (
    <>
      <h2>Topic: {topic.name}</h2>
      <ul className="quizzes-list">
      </ul>
      <Link to='/new-quiz'>
        Create a New Quiz
      </Link>
    </>
  );
}
