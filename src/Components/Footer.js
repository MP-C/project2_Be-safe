import React from "react";
import "./Footer1";
import LogoBe from "./FooterLogo/LogoBe.png";
import LogoBrusselsCovid from "./FooterLogo/LogoBrusselsCovid.png";
import LogoSciensano from "./FooterLogo/LogoSciensano.png";

export default function Footer() {

  return (
    <div className="footer">gi
      <div className="footer_generalInformations">
        <h2 className="footer_title"> General Informations</h2>
        <div className="footer_contactsAndSites">
          <div className="footer_importantsContacts" >
            <h4 className="footer_titleImportantesConstacts"> Importantes Contacts</h4>
            <div className="titleContacts">
              <h5 className="titleContactList">Call center Belgium: 0800/14.689</h5>
              <h5 className="titleContactList">Call center Bruxelles : 0800/35.243</h5>
            </div>
          </div>
          <div calssName="footer_SitesInformations">
            <h4 className="titleSitesInformations"> National Informations Sites</h4>
            <div className="network_logos">
                <div>
                  <a href="https://www.info-coronavirus.be">
                  <img className="logo_contact_be_belgium" src={LogoBe} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://www.coronavirus.brussels">
                    <img className="logo_contact_be_brussels" src={LogoBrusselsCovid} alt="" />
                  </a>
                </div>
                <div>
                  <a href="https://epistat.wiv-isp.be/covid/covid-19.html">
                    <img className="logo_contact_be_Sciensano" src={LogoSciensano} alt="" />
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}