import React from 'react';
import './Tools.css';
import PhoneTwo from "../../assets/Col (1).png";

function Tools() {
  return (
    <div className="sekciya-tools">
      <h2 className="zagolovok-po-centru">All the essential tools</h2>
      <p className="podzagolovok-po-centru">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      <div className="flex-konteiner-tools">
        <div className="telefon-sleva">
          <div className="krug-na-fone"></div>
            <img src={PhoneTwo} alt="" className='PhoneTwo' />
        </div>

        <div className="tekst-sprava">
          <h3 className="zagolovok-h3">Semper feugiat</h3>
          <p className="sery-tekst">
            Proin arcu aliquet tristique in nec adipiscing elementum dui sit. Ut in eu convallis cras vulputate ultrices amet, libero pretium felis ac id sapien facilisi.
          </p>
          <div className="spisok-s-sinimi-liniyami">
            <div className="punkt-spiska">
              <div className="sinyaya-poloska"></div>
              <span>Malesuada feugiat magna in</span>
            </div>
            <div className="punkt-spiska">
              <div className="sinyaya-poloska"></div>
              <span>Tempus adipiscing id</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;