import React from "react";
import ReactDOM from "react-dom";
import "./production/style.css";
import Btn from "./Components/atoms/hamburger";
const App = () => {
  return (
    <React.Fragment>
      <Testing />
    </React.Fragment>
  );
};

const Testing = () => {
  return (
    <div className="h-screen bg-white w-full flex justify-center items-center">
      <Btn />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
