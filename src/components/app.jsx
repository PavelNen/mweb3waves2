import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  const auth = () => {
    const authData = { data: "Auth on my site" };
    if (WavesKeeper) {
      WavesKeeper.auth(authData)
        .then(auth => {
          console.log(auth); //displaying the result on the console
          /*...processing data */
        }).catch(error => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
        })
    } else {
      alert("To Auth WavesKeeper should be installed.");
    }
  }

  return (
    <div className="container">
      <input className="btn btn-primary" type="submit" value="Auth" onClick={auth} />
    </div>
  );
}

const app = document.getElementById('app');
if (app) {
  ReactDOM.render(<App />, app);
}
