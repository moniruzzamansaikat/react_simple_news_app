import { FaBars } from "react-icons/fa";

const NavigationBar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <a href="/" className="navbar-brand">
        <img src="/img/logo.png" alt="" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav ms-auto">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCategory("business");
              }}
            >
              Business
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCategory("technology");
              }}
            >
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCategory("entertainment");
              }}
            >
              Entertainment
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCategory("health");
              }}
            >
              Health
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCategory("science");
              }}
            >
              Science
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setCategory("sports");
              }}
            >
              Sports
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
