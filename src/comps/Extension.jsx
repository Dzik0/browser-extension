import img from '../assets/logo-speed-boost.svg';
import clsx from 'clsx';

function Extension({ darkMode }) {
  return (
    <div className={clsx('item-box', darkMode && 'item-box-dark-mode')}>
      <div className="item-info-box">
        <div className="info-box-img">
          <img src={img} alt="" />
        </div>
        <div className="info-box-info">
          <h3 className={clsx('text-preset-2', darkMode && 'h3-dark-mode')}>
            DevLens
          </h3>
          <p
            className={clsx(
              'text-preset-5',
              'info-p',
              darkMode && 'info-p-dark-mode'
            )}
          >
            Quickly inspect page layouts and visualize element boundaries.
          </p>
        </div>
      </div>
      <div className="item-btns-box">
        <button
          className={clsx(
            'remove-btn text-preset-6',
            darkMode && 'remove-btn-dark-mode'
          )}
        >
          Remove
        </button>
        <div className="move-btn-active">
          <div className="move-btn-ball"></div>
        </div>
      </div>
    </div>
  );
}

export default Extension;
