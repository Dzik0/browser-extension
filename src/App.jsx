import clsx from 'clsx';
import Header from './comps/Header.jsx';
import Extension from './comps/Extension.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevV) => !prevV);
  }

  return (
    <div
      className={clsx(
        'prime-container',
        darkMode && 'prime-container-dark-mode'
      )}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="upper-container">
        <h2 className={clsx('text-preset-1', darkMode && 'h2-dark-mode')}>
          Extensions List
        </h2>
        <div className="upper-btn-container">
          <button
            className={clsx(
              'upper-btn',
              'text-preset-4',
              darkMode && 'upper-btn-dark-mode'
            )}
          >
            All
          </button>
          <button
            className={clsx(
              'upper-btn',
              'text-preset-4',
              darkMode && 'upper-btn-dark-mode'
            )}
          >
            Active
          </button>{' '}
          <button
            className={clsx(
              'upper-btn',
              'text-preset-4',
              darkMode && 'upper-btn-dark-mode'
            )}
          >
            Inactive
          </button>
        </div>
      </div>
      <main>
        <Extension darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
