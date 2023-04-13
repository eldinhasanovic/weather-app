import "./App.css";
const api = {
  key: "215505f22417428b0f1b65c944438740",
  base: "https://home.openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
