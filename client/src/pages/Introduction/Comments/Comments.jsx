import Editor from '@monaco-editor/react';
import CommentsCSS from './Comments.module.css';

function CodeEditor() {
  const code = `# This is a comment
# It won't be run by the computer
# But it can help explain what's going on`;

  return (
    <div className={CommentsCSS.editorWrapper}>
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

function Comments() {
  return (
    <div className={CommentsCSS.container}>
      <div className={CommentsCSS.title}>
        <h1>Introduction</h1>
        <p>Comment</p>
      </div>

      <p className={CommentsCSS.text}>
        Comments in Python are notes that you add to your code to explain what
        it does. They are ignored by the computer when the code is run, but they
        help you and others understand what your code is doing.
      </p>
      <p className={CommentsCSS.text}>
        In Python, you can add a comment by starting a line with the # symbol.
        Everything after the # symbol on that line will be treated as a comment.
      </p>
      <p className={CommentsCSS.text}>For example:</p>
      <CodeEditor />

      <p className={CommentsCSS.text}>
        Adding comments to your code is a good habit, especially when you are
        working on large or complex projects. They make it easier to understand
        your code later on and can help you or others see any errors or
        potential improvements.
      </p>
    </div>
  );
}

export default Comments;
