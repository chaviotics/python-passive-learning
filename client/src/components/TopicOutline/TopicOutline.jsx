import React from 'react';
import TOCSS from './TopicOutline.module.css';

const topics = [
  'Introduction (What is Python?)',
  'Arithmetic Operations',
  'Variables',
  'Data Types',
  'Input/Output',
  'Control Structures',
  'Data Structures',
  'Loops',
];

function TopicOutline() {
  return (
    <div className={TOCSS.container}>
      <p>
        This interactive tutorial will teach you the basics of Python
        programming. Here, you will learn the concepts of:
      </p>
      <div className={TOCSS.topicsList}>
        {topics.map((topic) => (
          <div className={TOCSS.topicContainer}>
            <p>{topic}</p>
          </div>
        ))}
      </div>
      <p>
        Each concept will have its own “session”, and by the end of this
        tutorial, you will have an assessment to test your newly acquired Python
        skills.
      </p>
      <p>Enjoy the ride, and godspeed!</p>
      <button>Proceed</button>
    </div>
  );
}

export default TopicOutline;
