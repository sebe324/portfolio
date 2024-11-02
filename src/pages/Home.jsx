import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png'
import Slider from '../components/Slider';
import xd from '../assets/xd.jpg'
import githubmark from '../assets/github-mark.png';
import linkedinsquare from '../assets/linkedin-square.svg'
import {useTranslation } from 'react-i18next';
const projects = [
    {
        src: image1,
        title: "Retro Game",
        projectUrl: "https://github.com/sebe324/retro-game",
        tools: ["C++", "SFML", "CMake"]
    },
    {
        src: image2,
        title: "Ping Pong",
        projectUrl: "https://github.com/sebe324/pingpong",
        tools: ["C++", "Win32Api", "Win32GUI", "CMake"]
    },
    {
        src: image3,
        title: "Various Visualizations",
        projectUrl: "https://github.com/sebe324/Various-Visualizations",
        tools: ["Qt", "C++", "CMake"]
    },
    {
        src: image4,
        title: "Portfolio",
        projectUrl: "https://github.com/sebe324/sebe324.github.io",
        tools: ["React", "Bootstrap", "Node.js", "JavaScript", "RWD"]
    }
]
function Home() {

    const { t, i18n } = useTranslation();

    return (
        <main>
            <div className='container-fluid'>
                <div className='row front-look justify-content-md-center align-items-md-center align-content-start align-content-md-center mb-0 mb-md-4'>


                    <div className='col-md-5 name text-center text-md-start pb-md-0 pb-4'>
                        <h1>Sebastian Skonieczny</h1>
                        <h3>
                            Full-stack Software Engineer
                        </h3>
                    </div>

                    <div className='col-md-5 img-container'>
                        <img src={xd} className='lol' alt='Zdjęcie'></img>
                    </div>

                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-8'>
                        <h1>{t('about-header')}</h1>
                        <p>
                        {t('about-text1')}
                        </p>
                        <p>
                           {t('about-text2')}
                        </p>
                    </div>
                    <div className='col-lg-8 mt-4'>
                        <h1>{t('contact-header')}</h1>
                        <p>
                            {t('contact-text')}
                        </p>
                        <a className='contact-wrap ms-2 me-2 mb-3' href="https://github.com/sebe324" target="_blank">
                            <img src={githubmark} alt="github" />
                        </a>
                        <a className='contact-wrap me-2' href="https://www.linkedin.com/in/sebastian-skonieczny-384573276/" target="_blank">
                            <img src={linkedinsquare} alt="linkedin" />
                        </a>
                        <br />
                        <a className='mailto-link' href="mailto:skonieczny.sebastian123@gmail.com">skonieczny.sebastian123@gmail.com</a>
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>

                    <div className='col-lg-8 '>
                        <h1>{t('projects-header')}</h1>
                        <br></br>
                        <Slider slides={projects}></Slider>
                    </div>
                    <footer className='col-12 footer p-4 text-end mt-4'>
                        © Sebastian Skonieczny | 2024
                    </footer>
                </div>
            </div>
        </main>
    );
}

export default Home;