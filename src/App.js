import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./routes";
import GLobalStyle from "./styles/globalStyle";
import NavBar from "./components/Navbar";
function App() {
  return (
    <Router history={history}>
      <NavBar></NavBar>
      <Routes />
      <GLobalStyle></GLobalStyle>
    </Router>
  );
}

export default App;
