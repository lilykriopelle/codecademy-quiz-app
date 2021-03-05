import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";

export default function Topic() {
  const quizzes = {}; // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <>
      <h2>{quiz.name}</h2>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()}>Create a New Quiz</Link>
    </>
  );
}
