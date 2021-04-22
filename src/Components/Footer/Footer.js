import React from 'react';

import './Footer.css';

import LogoBe from '/src/Components/assets/LogoBe.png';
import LogoBrusselsCovid from '/src/Components/assets/LogoBrusselsCovid.png';
import LogoSciensano from '/src/Components/assets/LogoSciensano.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_generalInformations">
                <h3 className="footer_title"> General Informations</h3>
                <div className="footer_contactsAndSites">
                    <div className="footer_importantsContacts" >
                        <h5 className="footer_ImportantesConstactsTitle"> Importantes Contacts</h5>
                        <h6 className="contactList">Call center Belgium: 0800/14.689 </h6>
                        <h6 className="contactList">Call center Bruxelles : 0800/35.243 </h6>
                    </div>
                    <div calssName="footer_SitesInformations">
                        <h5>National Informations Sites</h5>
                        <div className="network_logos">

                            <div>
                                <h6>Belgium</h6>
                                <a href="www.info-coronavirus.be">
                                    <img 
                                        className="logo_contact_be_belgium"
                                        src={LogoBe}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div>
                                <h6>Brussels</h6>
                                <a href="www.coronavirus.brussels">
                                    <img 
                                        className="logo_contact_be_brussels"
                                        src={LogoBrusselsCovid}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div>
                                <h6>Sciensano</h6>
                                <a href="www.datastudio.google.com/u/0/reporting/c14a5cfc-cab7-4812-848c-0369173148ab/page/hOMwB">
                                    <img 
                                        className="logo_contact_be_Sciensano"
                                        src={LogoSciensano}
                                        alt=""
                                    />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}