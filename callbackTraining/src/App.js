import React, { useCallback, useState } from 'react';

import './App.css';

import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  //useCallback() -> stores function results so it doesn't re-run on component re-evaluation
  // PS: useCallback(fun(), [methodDependacy]);
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setShowParagraph(prevShowParagraph =>
        !prevShowParagraph
      )
    }
  },[allowToggle]); //setting 'allowToggle' as a dependency so the var may point to App.js one, not the one in useCallback()

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>

      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
