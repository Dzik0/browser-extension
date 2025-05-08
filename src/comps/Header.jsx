import mainLogo from '../assets/logo.svg';
import moon from '../assets/icon-moon.svg';
function Header() {
  return (
    <header>
      <div>
        <img src={mainLogo} alt="" />
      </div>
      <div className="mode-container">
        <img src={moon} alt="" />
      </div>
    </header>
  );
}

export default Header;
