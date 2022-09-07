import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ConnectProvider } from "context";
import MainRoute from "routes";
const App = () => {
  return (
    <Router>
      <div className="items-center justify-center flex">
        <ConnectProvider>
          <MainRoute />
        </ConnectProvider>
      </div>
    </Router>
  );
};

export default App;
