export default function ToggleTheme({ onClick, theme }) {
  //

  function handleClick() {
    onClick();
  }


  return (
    <button htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          onClick={handleClick}
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          checked={theme === "dark"}
          name="theme"
        />
        <span className="theme__icon">
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
        </span>
      </span>
    </button>
  );
}
