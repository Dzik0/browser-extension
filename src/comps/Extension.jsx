import img from '../assets/logo-speed-boost.svg';
import clsx from 'clsx';

function Extension({ darkMode, info, toggleExtension }) {
  return (
    <div className={clsx('item-box', darkMode && 'item-box-dark-mode')}>
      <div className="item-info-box">
        <div className="info-box-img">
          <img src={info.logo} alt="" />
        </div>
        <div className="info-box-info">
          <h3 className={clsx('text-preset-2', darkMode && 'h3-dark-mode')}>
            {info.name}
          </h3>
          <p
            className={clsx(
              'text-preset-5',
              'info-p',
              darkMode && 'info-p-dark-mode'
            )}
          >
            {info.description}
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
        <div
          className={clsx(
            'move-btn',
            info.isActive && 'move-btn-active',
            'classic-move-btn'
          )}
          onClick={() => {
            toggleExtension(info.id);
          }}
        >
          <div
            className={clsx(
              'move-btn-ball',
              info.isActive && 'move-btn-ball-active'
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Extension;
