import img from '../assets/logo-speed-boost.svg';

function Extension() {
  return (
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
        <div className="move-btn-active">
          <div className="move-btn-ball"></div>
        </div>
      </div>
    </div>
  );
}

export default Extension;
