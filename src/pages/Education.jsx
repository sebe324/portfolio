import { useState } from "react";
import { Trans, useTranslation } from 'react-i18next';
function Education()
{
    const [expanded, setExpanded] = useState(true);
    const {t, i18n} = useTranslation();

    return(
     <main>
         <div className='container-fluid'>
         <header className="my-4 text-center">
                <h1 className="h2 slideIn">{t("education-header")}</h1>
                </header>
                <div className="row ms-4">
                <div className="col-12 educationdiv">
                <b>{t("tm1-education-header")}</b>
                    <h5 className='grayout-small'>{t("tm1-education-school")}<br/>{t("tm1-education-date")}</h5>
                    <div className="test test2">
                    <p>
                        {t("tm1-education-desc")}
                    </p>
                    <Trans i18nKey="tm1-education-list">
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
                        </Trans>
                        </div>
                        </div>
                </div>
            </div>
     </main>
    )
}

export default Education