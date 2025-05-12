import Header from './comps/Header.jsx';
import Extension from './comps/Extension.jsx';

function App() {
  return (
    <div className="prime-container">
      <Header />
      <div className="upper-container">
        <h2 className="text-preset-1">Extensions List</h2>
        <div className="upper-btn-container">
          <button className="upper-btn text-preset-4">All</button>
          <button className="upper-btn text-preset-4">Active</button>
          <button className="upper-btn text-preset-4">Inactive</button>
        </div>
      </div>
      <main>
        <Extension />
        <Extension />
        <Extension />
        <Extension />
        <Extension />
        <Extension />
        <Extension />
      </main>
    </div>
  );
}

export default App;
