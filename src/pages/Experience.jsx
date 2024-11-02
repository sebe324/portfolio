import { useState } from "react";
import { Trans, useTranslation } from 'react-i18next';
function Experience() {

    const [detailsBAT, setDetailsBAT] = useState(true);
    const [detailsDN, setDetailsDN] = useState(true);
    const { t, i18n } = useTranslation();
    return (
        <main>
            <div className='container-fluid'>
                <header className="my-4 text-center">
                <h1 className="h2 slideIn">{t("experience-header")}</h1>
                </header>
                <div className="row ms-4">
                    <div className="col-12 bulletPoint">
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="bulletPoint col-12">
                        <b>{t("bat-job-title")}</b>
                        <h5 className='grayout-small'>B.A.T <br />{t("bat-job-date")}</h5>
                        <p>{t("bat-job-desc")}</p>
                        <div className={detailsBAT ? "test test2" : "test"}>
                            <Trans i18nKey="bat-job-list">
                                
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
                            </Trans>
                        </div>
                        <div className={detailsBAT ? "expandable noSelect expandable-rotate" : "expandable noSelect"} onClick={() => { setDetailsBAT(!detailsBAT) }}>v</div>

                    </div>

                    <div className="bulletPoint col-12">
                        <b>{t("dn-job-title")}</b>
                        <h5 className='grayout-small'>Diebold Nixdorf <br />{t("dn-job-date")}</h5>
                        <p>
                            {t("dn-job-desc")}
                        </p>
                        <div className={detailsDN ? "test test2" : "test"}>
                        <Trans i18nKey="dn-job-list">
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
                            </Trans>
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