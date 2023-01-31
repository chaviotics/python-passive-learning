import React from 'react';
import QCSS from './Quiz.module.css';

function Quiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <div className={QCSS.quizContainer}>
        {/* Insert Google Form iframe here with className={QCSS.quizFrame} */}
      </div>
    </div>
  );
}

export default Quiz;
