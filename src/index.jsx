import React from "react";
import ReactDOM from "react-dom";
import "./production/style.css";
const App = () => {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
