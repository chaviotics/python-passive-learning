import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import HWCSS from './HelloWorld.module.css';

function IntroHeading() {
  return (
    <div className={HWCSS.introHeading}>
      <div className={HWCSS.title}>
        <h1>Introduction</h1>
        <p>Hello, World!</p>
      </div>
      <p className={HWCSS.text}>
        You have heard of this statement many times when you learn a new
        programming language. Here’s how you can do it in Python.
      </p>
    </div>
  );
}

function CodeEditor() {
  const code = "print('Hello, World')";
  return (
    <div className={HWCSS.editorWrapper}>
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
  return <div className={HWCSS.outputConsole}></div>;
}

function HelloWorld() {
  return (
    <div className={HWCSS.container}>
      <IntroHeading />
      <div className={HWCSS.codeSpace}>
        <CodeEditor />
        <OutputConsole />
      </div>
      {/* <Link> */}
      <button className={HWCSS.button}>Proceed to Next Level</button>
      {/* </Link> */}
    </div>
  );
}

export default HelloWorld;
