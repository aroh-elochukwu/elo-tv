const Header = (props) => {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://fontmeme.com/permalink/220907/df2960cff45067000536afd58eb49843.png"
          alt="elo-tv-logo"
          border="0"
        />
      </a>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li>
              <a href="/my-watch-list">Watch List</a>
            </li>
          </ul>
        </nav>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
