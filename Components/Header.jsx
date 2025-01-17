import React, { useState, useEffect} from "react";

const Header = ({
  accounts,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  setOwnerModel,
  shoetenAddress,
  detail,
  currency,
  ownerModel,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener(
          "accountsChanged", handleAccountsChanged
        );
      }
    }
  }, []);

  const handleAccountsChanged = (accounts) => {
    setAccount(accounts[0]);
  };

  const connectMetaMask = async () => {
    if (typeof windowethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };

  return (
    <header className="site-header header--transparent ico-header">
      <div className="header_main-wrap">
        <div className="container mxw_1640">
          <div className="header__main ul_li_between">
            <div className="header__left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img src="assets/img/logo/joker-logo.png" 
                    style={{width: "190px"}}
                    alt="" 
                  />
                </a>
              </div>
            </div>

            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>
                  </li>

                  <li className="scrollspy-btn">
                    <a href="#about">About</a>
                  </li>

                  <li className="scrollspy-btn">
                    <a href="#roadmap">RoadMap</a>
                  </li>

                  <li className="scrollspy-btn">
                    <a href="#team">Team</a>
                  </li>

                  <li className="scrollspy-btn">
                    <a href="#faq">Faq</a>
                  </li>

                  <li className="scrollspy-btn">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
