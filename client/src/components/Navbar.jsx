import { Link } from "react-router-dom";


export default function Navbar() {
  // const [currentPage, setCurentPage] = useState([])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h4 className="small-nav-logo">
          <span>NATURE. </span> <br /> <span>NERDS. </span> <br />
          <span></span>
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarNav"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="btn nav-link">
                <Link to="/">HOME</Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/search" className="btn nav-link">
                <Link to="/search">SEARCH</Link>
              </a>
            </li>

            <li className="nav-item">
              <a href="/aboutus" className="btn nav-link">
                <Link to="/aboutus">ABOUT US</Link>
              </a>
            </li>

            <li className="nav-item">
              <a href="/login" className="btn nav-link">
                <Link to="/login">LOGIN</Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="btn nav-link">
                <Link to="/signup">SIGNUP</Link>
              </a>
            </li>

            <li className="nav-item">
              <a href="/savedparks" className="btn nav-link">
                <Link to="/savedparks">SAVED PARKS</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
