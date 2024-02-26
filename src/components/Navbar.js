import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Galleria</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">HomePage</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/nature">Nature</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/food">Food</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/animals">Animals</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/cars">Cars</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/mountains">Mountains</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/abstract">Abstract</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/wildlife">Wildlife</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
