import React from "react";
import { Link } from "react-router-dom";
import SumState from "../../utils/SumState";
import { useContext } from "react";
export default function Navbar() {
  const { token , setToken} = useContext(SumState);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img width={"120px"} src="https://s6.uupload.ir/files/logo_cc4r.png" alt="" />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <span style={{cursor:"pointer"}} className="nav-link" onClick={()=>setToken()}>
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login-register">
                  <span style={{cursor:"pointer"}}>Login/Register</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
