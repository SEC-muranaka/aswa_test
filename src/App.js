import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const callFunction = async () => {
    try {
      const url = `/api/functions_aswa_test?name=${encodeURIComponent(name)}`;
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text();
        setResponse(text);
      } else {
        setResponse('Error: Failed to call the Azure Function.');
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Azure Static Web Apps と Azure Functionsの連携テスト
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />
      <button onClick={callFunction} style={{ padding: '10px 20px' }}>
        API実行
      </button>
      <div style={{ marginTop: '20px', fontSize: '16px', color: 'blue' }}>
        <strong>レスポンス:</strong> {response}
      </div>
    </div>
  );
}

export default App;
