import { useState } from "react";

function Education()
{
    const [expanded, setExpanded] = useState(true);

    return(
     <main>
         <div className='container-fluid'>
         <header className="my-4 text-center">
                <h1 className="h2 slideIn">Edukacja</h1>
                </header>
                <div className="row ms-4">
                <div className="col-12 educationdiv">
                <b>Technik Programista</b>
                    <h5 className='grayout-small'>Technikum Mechatroniczne nr 1 im. Piotra Drzewieckiego, Wiśniowa <br/> Wrzesień 2020 - Maj 2025</h5>
                    <div className="test test2">
                    <p>Podczas nauki w najlepszym technikum w Warszawie na kierunku technika programisty poznałem wiele technologii i języków programowania.
                        Kwalifikacja zawodowa składała się z 2 modułów:
                    </p>
                        <ul>
                            <li>
                                <b>INF.03 - Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych</b>
                                <p>
                                    Nauczyłem się podstaw tworzenia stron internetowych i zarządzaniem bazami danych. 
                                    Poznałem technologie takie jak HTML, CSS, JS, SQL i PHP.
                                </p>
                            </li>
                            <li>
                                <b>INF.04 -  Projektowanie, programowanie i testowanie aplikacji</b>
                                <p>
                                    Moduł ten polegał na programowaniu aplikacji desktopowych, mobilnych i webowych.
                                    Języki programowania i narzędzia jakie poznałem to między innymi: Android Studio, WPF, React, Angular, Qt, Spring.
                                </p>
                            </li>
                        </ul>
                        </div>
                        </div>
                </div>
            </div>
     </main>
    )
}

export default Education