import React from 'react';
/*import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'*/

const App = () => {
/*  const onClick = async () => {
    fetch("http://localhost:8090/me").then(res => console.log(res)).catch(e => console.log(e))
  }*/
  return (
      // <ReactKeycloakProvider authClient={keycloak}>
      //   <div className="App"> ... </div>
       //   <button onClick={onClick}>Sign In</button>
      <a href="http://localhost:8090/me">Sign In</a>
      // </ReactKeycloakProvider>
  )
}

export default App