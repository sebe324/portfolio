import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <header className='sticky-top'>
            <nav className='navbar navbar-expand-md'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>
                        <img src="" className='d-inline-block me-1' alt="logo" width="30" height="30"></img>
                    </Link>
                    <button className='navbar-toggler x collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#mainmenu'
                        aria-controls='mainmenu' aria-expanded='false' aria-label='navigation switch'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='mainmenu'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='experience'>Doświadczenie</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link' to='education'>Edukacja</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link' to='projects'>Projekty</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link disabled' to='experience'>Blog</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link' to='contact'>Kontakt</Link>
                            </li>
                        </ul>
                        <div className='nav-item dropdown'>
                            <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown'
                                role='button' aria-expanded='false' id='settingsSubmenu' aria-haspopup='true'>
                                Ustawienia
                            </button>
                            <div className='dropdown-menu' aria-labelledby='settingsSubmenu'>
                                <button className='btn dropdown-item' type='button'>PL</button>
                                <button className='btn dropdown-item' type='button'>ENG</button>
                                <div className="dropdown-divider"></div>
                                <a className='dropdown-item' href="#">Day</a>
                                <a className='dropdown-item' href="#">Night</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <Outlet/>
        </>

    );
}

export default Navbar;