import React from "react";

const About = () => {
  return (
    <section className="about pos-rel pb-140" id="about">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wow fadeInLeft">
              <img src="assets/img/about/about_img.png" alt="" />

              <div className="about__shape">
                <img src="assets/img/shape/about_shape" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-30">
            <div className="about__content wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="sec-title mb-35">
                <h5 className="sec-title_subtitle">
                  WHAT IS ICO CRYPTO
                </h5>

                <h2 className="sec-title__title mb-25">
                  crypto is a new digital financial
                  technology with remote access
                </h2>

                <p>
                  Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit.
                  Officia quae facere corrupti
                  doloremque eos minima optio
                  corporis ut, ipsam totam facilis
                  esse? Quae nesciunt
                  necessitatibus perferendis neque,
                  facilis impedit voluptatem?
                </p>
              </div>

              <ul className="about__list ul_li">
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Decentralized Platform
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Rewards Meachanism
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Crowd Wisdom
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Investor Protection
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Token Sale Phases
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Exchange Listing
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>

      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape_2.png" alt="" />
      </div>
    </section>
  );
};

export default About;
