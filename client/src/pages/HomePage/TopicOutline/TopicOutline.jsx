import React from 'react';
import { Link } from 'react-router-dom';
import TOCSS from './TopicOutline.module.css';

const topics = [
  { id: 1, title: 'Introduction (What is Python?)' },
  { id: 2, title: 'Arithmetic Operations' },
  { id: 3, title: 'Variables' },
  { id: 4, title: 'Data Types' },
  { id: 5, title: 'Input/Output' },
  { id: 6, title: 'Control Structures' },
  { id: 7, title: 'Data Structures' },
  { id: 8, title: 'Loops' },
];

function TopicOutline() {
  return (
    <div className={TOCSS.container}>
      <p className={TOCSS.text}>
        This interactive tutorial will teach you the basics of Python
        programming. Here, you will learn the concepts of:
      </p>

      <div className={TOCSS.topicsList}>
        {topics.map((topic) => (
          <div key={topic.id} className={TOCSS.topicContainer}>
            <p>{topic.title}</p>
          </div>
        ))}
      </div>

      <p className={TOCSS.text}>
        Each concept will have its own “session”, and by the end of this
        tutorial, you will have an assessment to test your newly acquired Python
        skills.
      </p>

      <p className={TOCSS.text}>Enjoy the ride, and godspeed!</p>

      <Link className={TOCSS.button} to="/intro">
        <button className={TOCSS.button}>Proceed</button>
      </Link>
    </div>
  );
}

export default TopicOutline;
