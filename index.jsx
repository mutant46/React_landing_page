import React from "react";
import ReactDOM from "react-dom";
import "../production/styles.css";
const App = () => {
  return (
    <React.Fragment>
      <h1 className="bg-red-900 text-5xl">Hello World</h1>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
