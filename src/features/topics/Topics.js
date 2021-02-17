import NewTopicForm from '../../components/NewTopicForm'
import { useSelector } from 'react-redux';
import { selectTopics } from './topicsSlice'
import { Link } from 'react-router-dom';
import ROUTES from '../../app/routes'

export default function Topics() {
  const topics = useSelector(selectTopics)

  return (
    <>
      <h2>Topics</h2>
      <ul className="topics-list">
        {
          Object.values(topics).map(topic => (
            <li className="topic" key={topic.id} >
              <Link to={ROUTES.topicRoute(topic.id)}>
                {topic.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <Link to={ROUTES.newTopicRoute()}>
        Create New Topic
      </Link>
    </>
  );
}
