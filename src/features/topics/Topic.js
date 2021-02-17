import NewTopicForm from '../../components/NewTopicForm'
import { useSelector } from 'react-redux'
import { selectTopics } from './topicsSlice'
import { selectQuizzes } from '../quizzes/quizzesSlice'
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../../app/routes'

export default function Topic() {
  const topics = useSelector(selectTopics)
  const quizzes = useSelector(selectQuizzes)
  let { topicId } = useParams()
  const topic = topics[topicId]
  const quizzesForTopic = topic.quizIds.map(quizId => quizzes[quizId])

  return (
    <>
      <h2>Topic: {topic.name}</h2>
      <ul className="quizzes-list">
        {
          quizzesForTopic.map(quiz => (
            <li className="quiz" key={quiz.id} >
              <Link to={ROUTES.quizRoute(quiz.id)}>
                {quiz.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <Link to='/quizzes/new'>
        Create a New Quiz
      </Link>
    </>
  );
}
