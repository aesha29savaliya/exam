import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
     return (
          <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                         <div className="navbar-nav">
                              <Link className="nav-link active" to={"/"}>Home</Link>
                              <Link className="nav-link active" to={"/product"}>Product</Link>
                         </div>
                    </div>
               </nav>
          </div>
     )
}

export default Navigation
