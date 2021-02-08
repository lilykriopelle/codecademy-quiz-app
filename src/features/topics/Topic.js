import NewTopicForm from '../../components/NewTopicForm'
import { useSelector } from 'react-redux'
import { selectTopics } from './topicsSlice'
import { selectQuizzes } from '../quizzes/quizzesSlice'
import { Link, useParams } from 'react-router-dom'

export default function Topic() {
  const topics = useSelector(selectTopics)
  const quizzes = useSelector(selectQuizzes)
  let { topicId } = useParams()
  const topic = topics[topicId]
  const quizzesForTopic = Object.values(quizzes).filter(quiz => quiz.topicId == topic.id)
  return (
    <>
      <h2>Topic: {topic.name}</h2>
      <ul className="quizzes-list">
        {
          quizzesForTopic.map(quiz => (
            <Link key={quiz.id} to={`/quizzes/${quiz.id}`}>
              <li className="quiz">
                {quiz.name}
              </li>
            </Link>
          ))
        }
      </ul>
      <Link to='/new-quiz'>
        Create a New Quiz
      </Link>
    </>
  );
}
