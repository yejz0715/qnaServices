import React from "react";
import QnaBoard from "./pages/QnaBoard";
import "./style/App.css";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <QnaBoard />
    </div>
  );
}

export default App;
