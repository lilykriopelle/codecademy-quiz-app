import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import NewQuizForm from '../components/NewQuizForm';
import NewTopicForm from '../components/NewTopicForm';
import Topics from '../features/topics/Topics';
import Topic from '../features/topics/Topic';
import Quiz from '../features/quizzes/Quiz';
import Quizzes from '../features/quizzes/Quizzes';
import ROUTES from './routes'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.topicsRoute()}>Topics</Link>
            </li>
            <li>
              <Link to={ROUTES.quizzesRoute()}>Quizzes</Link>
            </li>
            <li>
              <Link to={ROUTES.newQuizRoute()}>New Quiz</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/topics'>
            <TopicsRoutes />
          </Route>
          <Route path='/quizzes'>
            <QuizRoutes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function TopicsRoutes () {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTopicForm />
        </Route>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <Topics />
        </Route>
      </Switch>
    </>
  )
}

function QuizRoutes () {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewQuizForm />
        </Route>
        <Route path={`${match.path}/:quizId`}>
          <Quiz />
        </Route>
        <Route path={`${match.path}`}>
          <Quizzes />
        </Route>
      </Switch>
    </>
  )
}
