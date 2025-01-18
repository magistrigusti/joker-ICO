import React from "react";

const SideBar = () => {
  return (
    <aside className="slide-bar">
      <div className="close-mobile-menu">
        <a className="tx-close" href="/"></a>
      </div>
      
      <nav className="side-mobile-menu">
        <a className="header__logo mb-30" href="/">
          <img src="/assets/img/logo/joker-logo.png" alt="" />
        </a>
        
        <div className="header-mobile-search">
          <form action="#" role="search">
            <input type="text" placeholder="Search Keywords" />

            <button type="submit">
              <i className="ti-search" />
            </button>
          </form>
        </div>

        <ul id="mobile-menu-active">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a className="scrollspy-btn"
              href="#about"
            >
              About
            </a>
          </li>

          <li>
            <a className="scrollspy-btn"
              href="#roadmap"
            >
              RoadMap
            </a>
          </li>

          <li>
            <a className="scrollspy-btn"
              href="#team"
            >
              Team
            </a>
          </li>

          <li>
            <a className="" href="#!">
              Blog
            </a>
          </li>

          <li>
            <a className="" href="#!">
              Get In touch
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;

