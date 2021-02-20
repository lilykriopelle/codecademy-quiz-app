import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizzesSlice";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);
  return (
    <>
      <h2>Quizzes</h2>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quizz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()}>Create New Quiz</Link>
    </>
  );
}
