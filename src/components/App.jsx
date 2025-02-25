import React, { useState } from 'react';
import UploadForm from './UploadForm';
import KnowledgeGraph from './KnowledgeGraph';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <h1>Ophthalmology Disease Predictor</h1>
      <UploadForm setResult={setResult} />
      {result && (
        <>
          <p><strong>Disease:</strong> {result.disease}</p>
          <p><strong>Hypothesis:</strong> {result.hypothesis}</p>
          <KnowledgeGraph data={result} />
        </>
      )}
    </div>
  );
};

export default App;