import WIPCSS from './WhatIsPython.module.css';
import pythonLogo from '../../../assets/python-logo.svg';
import Card from '../../../components/Card/Card';
import PythonVsC from './PythonVsC';

function Summary() {
  return (
    <div className={WIPCSS.summaryContainer}>
      <div className={WIPCSS.title}>
        <h1>Introduction</h1>
        <p>What is Python?</p>
      </div>

      <div className={WIPCSS.summary}>
        <img className={WIPCSS.pythonLogo} src={pythonLogo} />
        <div>
          <p className={WIPCSS.text}>
            Python is a high-level, interpreted, and general-purpose programming
            language. It was created by Guido van Rossum in the late 1980s and
            designed to emphasize readability and simplicity.
          </p>
          <p className={WIPCSS.text}>
            Python is dynamically typed, supports multiple programming paradigms
            (such as object-oriented, procedural, and functional), and provides
            a rich standard library and many open-source libraries for a wide
            range of tasks, including data analysis, machine learning, and web
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

function CompareWithC() {
  return (
    <div className={WIPCSS.compareWithC}>
      <h2>How does Python compare with C?</h2>
      <p className={WIPCSS.text}>
        Python and C are two popular programming languages that have some key
        differences:
      </p>
      <div className={WIPCSS.featuresList}>
        {PythonVsC.map((feature) => (
          <Card
            key={feature.id}
            title={feature.feature}
            text={feature.content}
          />
        ))}
      </div>
      <p className={WIPCSS.text}>
        Both Python and C have their own strengths and weaknesses, and the
        choice between them depends on the specific requirements of a project.
      </p>
    </div>
  );
}

function WhatIsPython() {
  return (
    <div className={WIPCSS.container}>
      <Summary />
      <CompareWithC />
    </div>
  );
}

export default WhatIsPython;
