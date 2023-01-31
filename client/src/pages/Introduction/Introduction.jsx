import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import ICSS from './Introduction.module.css';

function Intro() {
  return (
    <div className={ICSS.introHeading}>
      <h1 className={ICSS.introTitle}>Hello, World!</h1>
      <p className={ICSS.introText}>
        You have heard of this statement many times when you learn a new
        programming language. Here’s how you can do it in Python.
      </p>
    </div>
  );
}

function CodeEditor() {
  const code = "print('Hello, World')";
  return (
    <div className={ICSS.editorWrapper}>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '24px',
        }}
      />
    </div>
  );
}

function OutputConsole() {
  return <div className={ICSS.outputConsole}></div>;
}

function Introduction() {
  return (
    <div className={ICSS.container}>
      <Intro />
      <div className={ICSS.codeSpace}>
        <CodeEditor />
        <OutputConsole />
      </div>
      {/* <Link> */}
      <button className={ICSS.button}>Proceed to Next Level</button>
      {/* </Link> */}
    </div>
  );
}

export default Introduction;
