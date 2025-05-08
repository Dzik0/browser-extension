import Header from './comps/Header.jsx';
import img from './assets/logo-speed-boost.svg';

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
        <div className="item-box">
          <div className="item-info-box">
            <div className="info-box-img">
              <img src={img} alt="" />
            </div>
            <div className="info-box-info">
              <h3 className="text-preset-2">DevLens</h3>
              <p className="text-preset-5">
                Quickly inspect page layouts and visualize element boundaries.
              </p>
            </div>
          </div>
          <div className="item-btns-box">
            <button className="remove-btn text-preset-6">Remove</button>
            <div className="move-btn-non">
              <div className="move-btn-ball-non"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
