const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App").default;  // Note the `.default` to access the default export if App is using ES Modules

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
