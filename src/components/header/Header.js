import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">



               <h1> MovieBox</h1>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>


                <nav className="navbar navbar-light bg-dark  ">
  <form className="form-inline">
    <input className="form-control mr-sm-2 lom" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-8 my-sm-0 hin" type="submit">Search</button>
  </form>
</nav>
            </div>
        </div>
    )
}

export default Header