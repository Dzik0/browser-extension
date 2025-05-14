import clsx from 'clsx';
import Header from './comps/Header.jsx';
import Extension from './comps/Extension.jsx';
import data from './data.json';
import { useState } from 'react';

function App() {
  //STATES
  const [darkMode, setDarkMode] = useState(false);
  const [apps, setApps] = useState(data);
  console.log(apps);

  //HTML ELEMENTS
  const extensionList = apps.map((extension) => (
    <Extension
      key={extension.id}
      darkMode={darkMode}
      info={extension}
      toggleExtension={toggleExtension}
    />
  ));

  //FUNCTIONS
  function toggleDarkMode() {
    setDarkMode((prevV) => !prevV);
  }

  function toggleExtension(id) {
    setApps((prevP) =>
      prevP.map((extension) => {
        if (extension.id === id) {
          return { ...extension, isActive: !extension.isActive };
        }

        return extension;
      })
    );
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
      <main>{extensionList}</main>
    </div>
  );
}

export default App;
