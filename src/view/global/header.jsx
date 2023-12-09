import React, { useState } from "react";

const Header = () => {
   const [profileBord, setProfileBord] = useState(false);

   const toggleProfileBord = () => {
      setProfileBord(!profileBord)
   }

   return (
      <header className="header__page page"> 
         <div className="header__container container">
            <div className="header__body body">
               <div className="header__title">
                  <h1 className="header__title-h">
                  Awesome Kanban Board
                  </h1>
               </div>
               <div className="header__profile">
                  <div className="header__profile-icon">
                     <img src="../img/header/avatar.svg" alt="avatar" className="header__profile-icon-img" />
                  </div>
                  <div className="header__profile-accordion">
                     <span  className={profileBord ? 'acordion-icon-active' : 'acordion-icon'} onClick={toggleProfileBord}></span>
                  </div>
                  {profileBord && (
                     <div className="header__portfolio-board">
                        <ul className="header__portfolio-board-list">
                           <li className="header__portfolio-board-paragraph">
                              <a href="#" className="header__portfolio-board-link">
                                 Profile
                              </a>
                           </li>
                           <li className="header__portfolio-board-paragraph">
                              <a href="#" className="header__portfolio-board-link">
                                 Log Out
                              </a>
                           </li>
                        </ul>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;