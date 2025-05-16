import clsx from 'clsx';
import Header from './comps/Header.jsx';
import Extension from './comps/Extension.jsx';
import FilterButton from './comps/FilterButton.jsx';
import { filterStates } from './main.js';
import data from './data.json';
import { useState } from 'react';

function App() {
  //STATES
  const [darkMode, setDarkMode] = useState(false);
  const [apps, setApps] = useState(data);
  const [filter, setFilter] = useState(1);
  const appsOn = apps.filter((item) => item.isActive === true);
  const appsOff = apps.filter((item) => item.isActive === false);

  //HTML ELEMENTS
  const appsAll = apps.map((extension) => (
    <Extension
      key={extension.id}
      darkMode={darkMode}
      info={extension}
      toggleExtension={toggleExtension}
      removeExtension={removeExtension}
    />
  ));

  const appsOnList = appsOn.map((extension) => (
    <Extension
      key={extension.id}
      darkMode={darkMode}
      info={extension}
      toggleExtension={toggleExtension}
      removeExtension={removeExtension}
    />
  ));

  const appsOffList = appsOff.map((extension) => (
    <Extension
      key={extension.id}
      darkMode={darkMode}
      info={extension}
      toggleExtension={toggleExtension}
      removeExtension={removeExtension}
    />
  ));

  const filterButtons = filterStates.map((item) => (
    <FilterButton
      key={item.id}
      darkMode={darkMode}
      info={item}
      changeFilter={changeFilter}
      filter={filter}
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

  function removeExtension(id) {
    setApps((prevV) => prevV.filter((item) => item.id !== id));
  }

  function changeFilter(id) {
    setFilter(id);
  }

  function renderExtensions() {
    if (filter === 3) {
      return appsOffList;
    }

    if (filter === 2) {
      return appsOnList;
    }

    return appsAll;
  }

  return (
    <div className={clsx('main-div', darkMode && 'main-div-dark-mode')}>
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
          <div className="upper-btn-container">{filterButtons}</div>
        </div>
        <main>{renderExtensions()}</main>
        {apps.length === 0 && filter === 1 ? (
          <div
            className={clsx(
              'empty-extensions',
              darkMode && 'empty-extensions-dark-mode'
            )}
          >
            <h2>You have no installed extensions! 😢</h2>
          </div>
        ) : (
          ''
        )}
        {appsOn.length === 0 && filter === 2 ? (
          <div
            className={clsx(
              'empty-extensions',
              darkMode && 'empty-extensions-dark-mode'
            )}
          >
            <h2>You have no active extensions! 😢</h2>
          </div>
        ) : (
          ''
        )}
        {appsOff.length === 0 && filter === 3 ? (
          <div
            className={clsx(
              'empty-extensions',
              darkMode && 'empty-extensions-dark-mode'
            )}
          >
            <h2>You have no inactive extensions! 😢</h2>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
