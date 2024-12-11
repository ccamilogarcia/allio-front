import React from 'react'
import './stylesNavbar.css';

const Navbar = () => {
  return (
    <div className='me-2 mt-2'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-pill container ">
        <div className="container-fluid">
          <a className="navbar-brand Primary-Title" href="#">Nombre</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul> */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">wsp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ig</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">yt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar