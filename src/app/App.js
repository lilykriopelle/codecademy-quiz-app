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
import Quizzes from '../features/quizzes/Quizzes';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
            <li>
              <Link to='/quizzes'>Quizzes</Link>
            </li>
            <li>
              <Link to='/new-quiz'>New Quiz</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/topics'>
            <TopicsRoutes />
          </Route>
          <Route path='/new-topic'>
            <NewTopicForm />
          </Route>
          <Route path='/quizzes'>
            <Quizzes />
          </Route>
          <Route path='/new-quiz'>
            <NewQuizForm />
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
      <Topics />

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </>
  )
}
