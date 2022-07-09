import React from 'react';
import '../../App.css';

document.body.style.backgroundColor = "#D9F8C4";
export default function Products() {
  return (
      <div className='products'>

        <div className='container-fluid px-0 mt-xs-5'>
          <div className='row align-items-center justify-content-around text-center no-gutters'>
            <div className='col-lg-3 border rounded border-dark reward-1'>
              <img width = "100" height = "100" src = {require('./images/grab.png')} alt = "Grab" className='img-fluid py-5'></img>
              <p>500 Points for $5 OFF!</p>
              <button className='btn btn-primary mb-3'>Redeem</button>
            </div>

            <div className='col-lg-3 border rounded border-dark reward-1'>
              <img width = "200" src = {require('./images/shopee.jpeg')} alt = "Grab" className='img-fluid py-5'></img>
              <p>500 Points for $5 OFF!</p>
              <button className='btn btn-primary mb-3'>Redeem</button>
            </div>

            <div className='col-lg-3 border rounded border-dark reward-1'>
              <img width = "100" src = {require('./images/uniqlo.png')} alt = "Grab" className='img-fluid py-5'></img>
              <p>500 Points for $5 OFF!</p>
              <button className='btn btn-primary mb-3'>Redeem</button>
            </div>
          </div>

          <div className='row'>
            <div className = 'col-2'></div>
            <div className = 'col-8'>
              <h1 className='lead d-block text-center mt-5 display-1'>You have ___ points!</h1>
            </div>
            <div className = 'col-2'></div>
          </div>

          <div className='row mt-5'>
            <div className = 'col-5'></div>
            <div className = 'col-2 text-center'>
              <button className = 'btn btn-primary'>Back</button>
            </div>
            <div className = 'col-5'></div>
          </div>

        </div>

      </div>

  );
};
// import { useState } from "react";
// const ThemeSwitcher = () => {
//   const [theme, setTheme] = useState(null);
//   const resetTheme = () => {
//     setTheme(null);
//   };
//   const themeClass = theme ? theme.toLowerCase() : "secondary";
//   return (
//     <>
//       <div
//         className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
//       >
//         {`${theme || "Default"} Theme`}
//       </div>
//       <div className="btn-group">
//         <button className={`text-capitalize btn btn-${themeClass} btn-lg"`} type="button">
//           {theme ? theme + " theme" : "Choose Theme"}
//         </button>
//         <button
//           type="button"
//           className={`btn btn-lg btn-${themeClass} dropdown-toggle dropdown-toggle-split`}
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <span className="visually-hidden">Toggle Dropdown</span>
//         </button>
//         <div className="dropdown-menu">
//           <a className="dropdown-item" onClick={() => setTheme("primary")}>
//             Primary Theme
//           </a>
//           <a className="dropdown-item" onClick={() => setTheme("danger")}>
//             Danger Theme
//           </a>
//           <a
//             className="dropdown-item" onClick={() => setTheme("success")}>
//             Success Theme
//           </a>
//           <div className="dropdown-divider"></div>
//           <a className="dropdown-item" href="#" onClick={() => resetTheme()}>
//             Default Theme
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ThemeSwitcher;
