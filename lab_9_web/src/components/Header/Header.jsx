import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="border-bottom bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container justify-content">
          <a
            className="navbar-brand d-flex align-items-center fw-bold"
            href="#"
          >
            <img
              src="https://www.svgrepo.com/show/21889/trainers.svg"
              alt="Logo"
              width="40"
              height="40"
              className="me-2"
            />
          </a>

          <div className="d-flex justify-content-center flex-grow-1">
            <Navigation />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;