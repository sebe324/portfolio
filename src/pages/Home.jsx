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
        title: "Strona portfolio",
        projectUrl: "https://github.com/sebe324/sebe324.github.io",
        tools: ["React", "Bootstrap", "Node.js", "JavaScript", "RWD"]
    }
]
function Home() {

    return (
        <main>
            <div className='container-fluid'>
                <div className='row front-look justify-content-md-center mb-4'>


                    <div className='col-md-5 name float-end text-center text-md-start'>
                        <h1>Sebastian Skonieczny</h1>
                        <h3>
                            Full-stack Software Engineer
                        </h3>
                    </div>

                    <div className='col-md-5 img-container float-end'>
                        <img src={xd} className='lol' alt='Zdjęcie'></img>
                    </div>

                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-8'>
                        <h1>O mnie</h1>
                        <p>
                            Jestem programistą Full Stack pracującym przy rozwijaniu złożonych aplikacji webowych, desktopowych jak i konsolowych.
                            Posiadam szeroką wiedzę techniczną obejmującą zarówno frontend (React, Bootstrap, Qt), jak i backend (Node.js, Python, C++),
                            co pozwala mi na efektywną współpracę przy wszystkich etapach cyklu tworzenia oprogramowania. Mam również doświadczenie z korzystania z platform chmurowych (Azure).
                            Specjalizuję się w projektowaniu skalowalnych, wydajnych rozwiązań oraz dbam o implementację przyjaznych interfejsów użytkownika.
                        </p>
                        <p>
                            Od najmłodszych lat pasjonuję się komputerami, a swoje pierwsze programy zacząłem pisać mając zaledwie 11 lat. Postanowiłem dalej więc rozwijać swoje zainteresowanie i przekształcić je w karierę.
                            Oprócz siedzenia przy komputerze interesuje mnie też muzyka i matematyka. Lubie też od czasu do czasu pojeździć na rowerze :)
                        </p>
                    </div>
                    <div className='col-lg-8 mt-4'>
                        <h1>Współpraca</h1>
                        <p>
                            Jeżeli jesteś zainteresowany współpracą, zajrzyj na moje media społecznościowe lub napisz maila.
                        </p>
                        <a className='contact-wrap ms-2 me-2 mb-3' href="https://github.com/sebe324" target="_blank">
                        <img src={githubmark} alt="github"/>
                        </a>
                        <a className='contact-wrap me-2' href="https://www.linkedin.com/in/sebastian-skonieczny-384573276/" target="_blank">
                        <img src={linkedinsquare} alt="linkedin"/>
                        </a>
                        <br/>
                        <a className='mailto-link' href="mailto:skonieczny.sebastian123@gmail.com">skonieczny.sebastian123@gmail.com</a>
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>

                    <div className='col-lg-8 '>
                        <h1>Projekty</h1>
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