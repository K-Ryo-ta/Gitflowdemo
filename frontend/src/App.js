
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

  return (
    <div className="App">
      <div className="App-content">
        <p>
          {message}
        </p>
      </div>
    </div>
  );
}

export default App;
