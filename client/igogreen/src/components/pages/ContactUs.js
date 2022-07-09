import React from 'react';
import '../../App.css';

document.body.style.backgroundColor = "#D9F8C4";
export default function ContactUs() {
  return (
    <div className = "contact-us">
      <div className='container-fluid px-0 mt-xs-5'>
        <div className='row align-items-center justify-content-around text-center no-gutters'>
            <div className='col-lg-2 border rounded border-dark reward-1'>
              <img width = "100" height = "100" src = {require('./images/face4.jpg')} alt = "Grab" className='img-fluid py-5'></img>
              <p>Wei Kang</p>
              <a class = "btn btn-outline-info mt-0 mb-3" href = "https://github.com/weikangg" role = "button">Github</a>
            </div>

            <div className='col-lg-2 border rounded border-dark reward-1'>
              <img width = "120" height = "150" src = {require('./images/ervin.jpg')} alt = "Grab" className='img-fluid py-5'></img>
              <p>Ervin</p>
              <a class = "btn btn-outline-info mt-0 mb-3" href = "https://github.com/ErvinK123" role = "button">Github</a>
            </div>

            <div className='col-lg-2 border rounded border-dark reward-1'>
              <img width = "120" height = "100" src = {require('./images/donovan.jpg')} alt = "Grab" className='img-fluid py-5'></img>
              <p>Donovan</p>
              <a class = "btn btn-outline-info mt-0 mb-3" href = "https://github.com/24Donovan24" role = "button">Github</a>
            </div>

            <div className='col-lg-2 border rounded border-dark reward-1'>
              <img width = "120" height = "100" src = {require('./images/kok.jpg')} alt = "Grab" className='img-fluid py-5'></img>
              <p>Kok</p>
              <a class = "btn btn-outline-info mt-0 mb-3" href = "https://github.com/ee-suan" role = "button">Github</a>
            </div>
      </div>

      <div className='row align-items-center justify-content-around text-center no-gutters'>
          <div className = "col-2"></div>
          <div className = "col-8">
            <a class = "btn btn-primary mt-5" href = "https://weikangg.github.io/hack-n-roll-2022/" role = "button">Click here to check out our previous valiant effort!</a>
          </div>
          <div className = "col-2"></div>
      </div>
    </div>
  </div>
  );
};
