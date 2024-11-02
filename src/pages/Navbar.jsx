import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import home from '../assets/home.png';
import settings from '../assets/settings.png';
import { Outlet, Link } from "react-router-dom";
import {useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();

    function changeMode(mode)
    {
        document.documentElement.setAttribute('data-bs-theme',mode);
        localStorage.setItem('theme',mode);
    }
    function changeLang(lang)
    {
        i18n.changeLanguage(lang);
    }
    
    return (
        <>
        <header className='sticky-top'>
            <nav className='navbar navbar-expand-md'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>
                        <img src={home} className='d-inline-block me-1 align-bottom' alt="logo" width="30" height="30"></img>
                    </Link>
                    <div className='nav-item dropdown order-md-2 settingsdropdown'>
                            <button className='btn settingsbtn' type='button' data-bs-toggle='dropdown'
                                role='button' aria-expanded='false' id='settingsSubmenu' aria-haspopup='true'>
                                <img src={settings} className='d-inline-block me-1 align-bottom' alt="settings" width="30" height="30"></img>
                            </button>
                            <div className='dropdown-menu settingsmenu' aria-labelledby='settingsSubmenu'>
                                <button className='btn dropdown-item' type='button' onClick={()=>changeLang('pl')}>PL</button>
                                <button className='btn dropdown-item' type='button' onClick={()=>changeLang('en')}>ENG</button>
                                <div className="dropdown-divider"></div>
                                <button className='dropdown-item' onClick={()=>changeMode('light')}>{t("lightmode")}</button>
                                <button className='dropdown-item' onClick={()=>changeMode('dark')}>{t("darkmode")}</button>
                            </div>
                        </div>
                    <button className='navbar-toggler x collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#mainmenu'
                        aria-controls='mainmenu' aria-expanded='false' aria-label='navigation switch'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='mainmenu'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='experience'>{t("experience")}</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link' to='education'>{t("education")}</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link disabled bloglink' to='projects'>{t("projects")}</Link>
                            </li>
                            <li className='nav-item'>
                            <Link className='nav-link disabled bloglink' to='experience'>{t("blog")}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <Outlet/>
        </>

    );
}

export default Navbar;