import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Login() {
  function handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div>
      <h2>Please sign in:</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
