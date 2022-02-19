import "./Header.css";

function Header() {
  return (
    <header className="header--wrapper">
      <img className="logo" src="/images/TrollFace.png" alt="troll face"></img>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--text">React Project</h4>
    </header>
  );
}

export default Header;
