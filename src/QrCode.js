import React from 'react';
import qrCodeImage from './assets/img/qrcode.png';

import './QrCode.css';

console.log(qrCodeImage);

const QrCode = () => (
  <div className="qrcode__wrapper">
    <h3>Link para o chat:</h3>
    <img className="qrcode" src={qrCodeImage} />
  </div>
);

export default QrCode;
