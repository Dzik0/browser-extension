import clsx from 'clsx';

function FilterButton({ darkMode, info, changeFilter, filter }) {
  const highlighted = filter === info.id;

  return (
    <button
      className={clsx(
        'upper-btn',
        'text-preset-4',
        darkMode && 'upper-btn-dark-mode',
        highlighted && 'upper-btn-highlighted'
      )}
      onClick={() => {
        changeFilter(info.id);
      }}
    >
      {info.name}
    </button>
  );
}

export default FilterButton;
