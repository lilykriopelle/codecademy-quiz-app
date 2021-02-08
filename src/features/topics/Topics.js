import NewTopicForm from '../../components/NewTopicForm'
import { useSelector } from 'react-redux';
import { selectTopics } from './topicsSlice'
import { Link } from 'react-router-dom';

export default function Topics() {
  const topics = useSelector(selectTopics)

  return (
    <>
      <h2>Topics</h2>
      <ul className="topics-list">
        {
          Object.values(topics).map(topic => (
            <Link key={topic.id} to={`/topics/${topic.id}`}>
              <li className="topic">
                {topic.name}
              </li>
            </Link>
          ))
        }
      </ul>
      <Link to='/new-topic'>
        Create New Topic
      </Link>
    </>
  );
}
