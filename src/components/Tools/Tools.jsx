import React from 'react';
import './Tools.css';

function Tools({ list }) {
  return (
    <div className="sekciya-tools">
      <h2 className="zagolovok-po-centru">{list.mainTitle}</h2>
      <p className="podzagolovok-po-centru">{list.mainSubtitle}</p>

      <div className="flex-konteiner-tools">
        <div className="telefon-sleva">
          <div className="krug-na-fone"></div>
          <img src={list.phoneImg} alt="Tools Phone" className="PhoneTwo" />
        </div>

        <div className="tekst-sprava">
          <h3 className="zagolovok-h3">{list.rightTitle}</h3>
          <p className="sery-tekst">{list.rightText}</p>

          <div className="spisok-s-sinimi-liniyami">
            {list.features.map((item, index) => (
              <div className="punkt-spiska" key={index}>
                <div className="sinyaya-poloska"></div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
