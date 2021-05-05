import React from 'react';
import './Footer.css';
import LogoBe from '../assets/LogoBe.png';
import LogoBrusselsCovid from '../assets/LogoBrusselsCovid.png';
import LogoSciensano from '../assets/LogoSciensano.png';

export default function Footer() {

  return (
    <div className="footer">
      <div className="footer_generalInformations">
        <h2 className="footer_title"> General Informations</h2>
        <div className="footer_contactsAndSites">
          <div className="footer_importantsContacts" >
            <h4 className="footer_titleImportantesConstacts"> Importantes Contacts</h4>

            <h5 className="titleContactList">Call center Belgium: 0800/14.689</h5>
            <h5 className="titleContactList">Call center Bruxelles : 0800/35.243</h5>
          </div>
          <div calssName="footer_SitesInformations">
            <h4 className="titleSitesInformations"> National Informations Sites</h4>
            <div className="network_logos">

              <a href="https://www.info-coronavirus.be">
                <img className="logo_contact_be_belgium" src={LogoBe} alt="" />
              </a>

              <a href="https://www.coronavirus.brussels">
                <img className="logo_contact_be_brussels" src={LogoBrusselsCovid} alt="" />
              </a>

              <a href="https://epistat.wiv-isp.be/covid/covid-19.html">
                <img className="logo_contact_be_Sciensano" src={LogoSciensano} alt="" />
              </a>

            </div>
          </div>
        </div>
        <h6 className="headear_text_identification">
          This is our second project as students at Wild Code School Brussels campus.
          We were given the theme "Be-Safe" for this project and we developed the content,
          putting in practice our skills learned in class about React.Js, consuming API's, HTML and CSS. </h6>
      </div>
    </div>
  )
}