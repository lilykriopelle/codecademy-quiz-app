import { useSelector } from 'react-redux';
import { selectQuizzes } from './quizzesSlice'
import { Link } from 'react-router-dom';

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes)
  return (
    <>
      <h2>Quizzes</h2>
      <ul className="quizzes-list">
        {
          Object.values(quizzes).map(quiz => (
            <Link key={quiz.id} to={`/quizzes/${quiz.id}`}>
              <li className="quizz">
                {quiz.name}
              </li>
            </Link>
          ))
        }
      </ul>
      <Link to='/new-quiz'>
        Create New Quiz
      </Link>
    </>
  );
}
