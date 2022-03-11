import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  return (
    <div className="container">
      <input
        className="btn btn-primary"
        type="submit"
        value="Alert"
        onClick={() => {
          alert('Alert button onClick');
        }}
      />
    </div>
  );
}

const app = document.getElementById('app');
if (app) {
  ReactDOM.render(<App />, app);
}
