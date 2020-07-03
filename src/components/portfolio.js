import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { Fade, Slide } from "react-awesome-reveal"

const PortfolioLink = props => (
  <li>
    <Link to={props.to} className={props.class}>
      {props.children}
    </Link>
  </li>
)

const Portfolio = () => (
    <Fade triggerOnce>
  <section id="portfolio" className="portfolio features8">
    <Container>
      <Row className="blog-block justify-content-around">
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>OSTATNIE PRACE</strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Tutaj znajdziesz kilka ostatnich projektów. Chcesz zobaczyć
              więcej? Napisz do mnie.
            </h3>
          </Col>
          <div className="card py-3 col-12 col-md-6 col-lg-4">
            <div className="card-wrapper">
              <div className="card-img">
                <img
                  src="https://jakubskowronski.com/assets/images/postplaner_pl.png"
                  title=""
                  alt=""
                />
              </div>
              <div className="card-box">
                <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                  POST PLANER
                </h4>
                <div className="card-underline align-center">
                  <div className="line"></div>
                </div>
                <p className="mbr-text mbr-fonts-style align-center display-7">
                  Planer postów
                </p>
              </div>
              <div className="mbr-section-btn align-center">
                <a
                  href="https://postplaner.pl"
                  className="btn btn-success display-4"
                  target="_blank"
                >
                  ODWIEDŹ STRONĘ
                </a>
              </div>
            </div>
          </div>
          <div className="card py-3 col-12 col-md-6 col-lg-4">
            <div className="card-wrapper">
              <div className="card-img">
                <img
                  src="https://jakubskowronski.com/assets/images/mltranseu.png"
                  title=""
                  alt=""
                />
              </div>
              <div className="card-box">
                <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                  ML TRANS
                </h4>
                <div className="card-underline align-center">
                  <div className="line"></div>
                </div>
                <p className="mbr-text mbr-fonts-style align-center display-7">
                  Strona firmy transportowej
                </p>
              </div>
              <div className="mbr-section-btn align-center">
                <a
                  href="https://mltrans.eu"
                  className="btn btn-success display-4"
                  target="_blank"
                >
                  ODWIEDŹ STRONĘ
                </a>
              </div>
            </div>
          </div>
          <div className="card py-3 col-12 col-md-6 col-lg-4">
            <div className="card-wrapper">
              <div className="card-img">
                <img
                  src="https://jakubskowronski.com/assets/images/lakinipl.png"
                  title=""
                  alt=""
                />
              </div>
              <div className="card-box">
                <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                  LAKINI
                </h4>
                <div className="card-underline align-center">
                  <div className="line"></div>
                </div>
                <p className="mbr-text mbr-fonts-style align-center display-7">
                  Sklep z obuwiem
                </p>
              </div>
              <div className="mbr-section-btn align-center">
                <a
                  href="https://lakini.pl"
                  className="btn btn-success display-4"
                  target="_blank"
                >
                  ODWIEDŹ STRONĘ
                </a>
              </div>
            </div>
          </div>
        {/* <div className="row row-content justify-content-center">
            <div className="card py-3 col-12 col-md-6 col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="assets/images/rs-car.png" title="" alt="" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                            RS CAR</h4>
                        <div className="card-underline align-center">
                            <div className="line"></div>
                        </div>
                        <p className="mbr-text mbr-fonts-style align-center display-7">Wizytówka lakierni
                            samochodowej</p>

                    </div>
                    <div className="mbr-section-btn align-center"><a href="https://jakubskowronski.com/rscar" className="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
                </div>
            </div>

            <div className="card py-3 col-12 col-md-6 col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="assets/images/hfb-broker-1910x969.png" title="" alt="" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                            HFB BROKER</h4>
                        <div className="card-underline align-center">
                            <div className="line"></div>
                        </div>
                        <p className="mbr-text mbr-fonts-style align-center display-7">
                            Strona brokera ubezpieczeń</p>
                    </div>
                    <div className="mbr-section-btn align-center"><a href="https://jakubskowronski.com/hfb" className="btn btn-success display-4">ODWIEDŹ STRONĘ</a></div>
                </div>
            </div>

            <div className="card py-3 col-12 col-md-6 col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="assets/images/jsns-eu.png" title="" alt="" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">JS Soft</h4>
                        <div className="card-underline align-center">
                            <div className="line"></div>
                        </div>
                        <p className="mbr-text mbr-fonts-style align-center display-7">Rozszerzenia do CMS Joomla!
                        </p>
                    </div>
                    <div className="mbr-section-btn align-center"><a href="https://jsns.eu" className="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
                </div>
            </div>
        </div>     */}
      </Row>
    </Container>
  </section>
  
  </Fade>
)

export default Portfolio
