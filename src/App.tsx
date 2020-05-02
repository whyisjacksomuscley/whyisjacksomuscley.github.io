import React, { useState } from 'react';
import './App.css';

const truths = ["he isn't", "he has never been", "he will never be"];

function App() {
  const [stage, setStage] = useState<number>(0);
  const onClick = () => {
    setStage(stage + 1);
  }

  console.log(`stage: ${stage}`);
  const truth = truths[stage % 3];
  return (
    <div className="App" onClick={onClick}>
      <main className="get-out-of-here">
        {truth}
      </main>
    </div>
  );
}

export default App;
