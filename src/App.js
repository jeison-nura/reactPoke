import React from "react";
import Header from "./components/Layout/Header";
import Routes from "./routes/router";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes />
      </main>
    </React.Fragment>
  );
}

export default App;
