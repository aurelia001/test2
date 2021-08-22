import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Weather city="Tokyo" />
    </div>
  );
}

export default App;
