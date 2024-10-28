import { useState } from "react";
function Experience() {

    const [detailsBAT, setDetailsBAT] = useState(true);
    const [detailsDN, setDetailsDN] = useState(true);
    return (
        <main>
            <div className='container-fluid'>
                <header className="my-4 text-center">
                <h1 className="h2 slideIn">Doświadczenie Zawodowe</h1>
                </header>
                <div className="row ms-4">
                    <div className="col-12 bulletPoint">
                        <b>???</b>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="bulletPoint col-12">
                        <b>Młodszy Programista (Staż)</b>
                        <h5 className='grayout-small'>B.A.T <br /> lipiec 2024 - aktualnie</h5>
                        <p>Obecnie pracuję w firmie British American Tobacco, gdzie projektuję, wdrażam i utrzymuję oprogramowanie wewnętrzne.</p>
                        <div className={detailsBAT ? "test test2" : "test"}>
                            <ul>
                                <li>
                                    Tworzenie dashboardów w New Relic łączących się z danymi z produkcji. Wdrożenie niestandardowego dashboardu zaprogramowanego w React.
                                </li>
                                <li>
                                    Deployment chatbotów opartych na dokumentacji firmowej na Teams i aplikacje webowe. Zajmowałem się zarówno frontendem (React) jak i backendem (Python).
                                </li>
                                <li>
                                    Implementacja rozwiązań zapewniających automatyczne testowanie, monitorowanie i wdrażanie aplikacji w Azure DevOps, CI/CD.
                                </li>
                                <li>
                                    Tworzenie i zarządzanie aplikacjami webowymi (Azure Web Apps) w Microsoft Azure, zapewniając skalowalność, wydajność i bezpieczeństwo aplikacji.
                                </li>
                                <li>
                                    Implementacja i konfiguracja Azure Search do zapewnienia zaawansowanego wyszukiwania pełnotekstowego w aplikacjach.
                                </li>
                            </ul>
                        </div>
                        <div className={detailsBAT ? "expandable noSelect expandable-rotate" : "expandable noSelect"} onClick={() => { setDetailsBAT(!detailsBAT) }}>v</div>

                    </div>

                    <div className="bulletPoint col-12">
                        <b>Praktykant w dziale Inżynierii Oprogramowania</b>
                        <h5 className='grayout-small'>Diebold Nixdorf <br /> kwiecień 2024 - czerwiec 2024</h5>
                        <p>
                            W ramach szkolnych praktyk pracowałem w firmie Diebold Nixdorf w dziale inżynierii oprogramowania i wsparcia technicznego.
                        </p>
                        <div className={detailsDN ? "test test2" : "test"}>
                            <ul>
                                <li>
                                    Wgrywanie nowego oprogramowania do bankomatów i testowanie go, naprawianie błędów.
                                </li>
                                <li>
                                    Programowanie interfejsu użytkownika do bankomatu przy użyciu JS, JQuery, HTML, CSS.
                                </li>
                                <li>
                                    Dokumentowanie projektu, konsultacje z resztą zespołu.
                                </li>
                            </ul>
                        </div>
                        <div className={detailsDN ? "expandable noSelect expandable-rotate" : "expandable noSelect"} onClick={() => { setDetailsDN(!detailsDN) }}>v</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Experience