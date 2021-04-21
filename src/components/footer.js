import React from "react";
import "./Footer.css";
import LogoBe from "./LogoFooter/LogoBe.jpg";
import LogoBrusselsCovid from "./LogoFooter/LogoBrusselsCovid.jpeg";
import LogoSciensano from "./LogoFooter/LogoSciensano.png";

export default function Footer() {

  return (
    <div className="footer">
      <div className="footer_generalInformations">
        <h3 className="footer_title"> General Informations</h3>
        <div className="footer_contactsAndSites">
          <div className="footer_importantsContacts" >
            <h5 className="footer_ImportantesConstactsTitle"> Importantes Contacts</h5>
            <h6 className="contactList">Call center Belgium: 0800/14.689 </h6>
            <h5 className="contactList">Call center Bruxelles : 0800/35.243 </h5>
          </div>
          <div calssName="footer_SitesInformations">
            <h3>National Informations Sites</h3>
            <div className="network_logos">
              <ul>
                <a href="www.info-coronavirus.be">
                  <div>
                  <p>Belgium <img className="logo_contact_be_belgium" src={LogoBe} alt="" /></p>
                  </div>
                </a>
                <a href="www.coronavirus.brussels">
                  <div>
                    <p>Brussels <img className="logo_contact_be_brussels" src={LogoBrusselsCovid} alt="" /></p>
                  </div>
                </a>
                <a href="www.datastudio.google.com/u/0/reporting/c14a5cfc-cab7-4812-848c-0369173148ab/page/hOMwB">
                  <div>
                  <p>Sciensano <img className="logo_contact_be_Sciensano" src={LogoSciensano} alt="" /></p>
                  </div>
                </a>
              </u>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}