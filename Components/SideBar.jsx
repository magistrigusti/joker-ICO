import React from "react";

const SideBar = () => {
  return (
    <aside className="slide-bar">
      <div className="close-mobile-menu">
        <a className="tx-close" href="/">
        </a>
      </div>
      
      <nav className="side-mobile-menu">
        <a className="header__logo mb-30" href="/">
          <img src="/assets/img/logo/logo.svg" alt="" />
        </a>
        
        <div className="header-mobile-search">
          <form action="#" role="search">
            <input type="text" plaseholder="Search Keywords" />

            <button type="submit">
              <i className="ti-search" />
            </button>
          </form>
        </div>

        
      </nav>
    </aside>
  );
};

export default SideBar;
