import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="site-footer footer__ico pos-rel"
      data-background="assets/img/bg/footer_bg.png"
    > 
      <div className="container">
        <div className="row mt-none-30">
          <div className="col-lg-4 mt-30">
            <div className="footer__widget footer__subscribe">
              <h2>Subscribe newsletter</h2>
              <p>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Nobis
                amet ipsa dignissimos accusamus,
                iusto quibusdam.
              </p>

              <form action="">
                <input type="text"
                  placeholder="magistrigusti@gmail.com"
                />

                <button>
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-8 mt-30">
            <div className="footer__widget text-lg-end">
              <h2>Download Document</h2>

              <div className="footer_document ul_li_right">
                <a className="footer__document-item text-center"
                  href="#"
                >
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" />
                  </div>

                  <span className="title">
                    <IoCloudDownload />
                    white paper
                  </span>
                </a>

                <a className="footer__document-item text-center"
                  href="#"
                >
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" />
                  </div>

                  <span className="title">
                    <IoCloudDownload />
                    one paper
                  </span>
                </a>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
