import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg bg-primary navbarlight">
                <a className="navbar-brand" href="#">
                    Single Page Application
                </a>
                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse" data-target="menu">
                    <span className="navbar-toggle-icon"></span>
                </button>
                {/* menu */}

                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />

        </>
    )
}

export default Layout