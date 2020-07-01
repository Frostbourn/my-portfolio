import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

const PortfolioLink = props => (
  <li>
    <Link to={props.to} class={props.class}>
      {props.children}
    </Link>
  </li>
)

const Portfolio = () => (
  <section id="portfolio" className="portfolio features8">
    <Container fluid>
      <Row className="blog-block">
        <Col md={12}>
          <h2 class="mbr-section-title mbr-fonts-style align-center display-2">
            <strong>OSTATNIE PRACE</strong>
          </h2>
          <h3 class="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Tutaj znajdziesz kilka ostatnich projektów. Chcesz zobaczyć więcej? Napisz do mnie.
          </h3>
        </Col>
        <div class="card py-3 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
                <div class="card-img">
                    <img src="assets/images/postplaner_pl.png" title="" alt="" />
                </div>
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mbr-bold align-center display-5">
                        POST PLANER</h4>
                    <div class="card-underline align-center">
                        <div class="line"></div>
                    </div>
                    <p class="mbr-text mbr-fonts-style align-center display-7">Planer postów</p>

                </div>
                <div class="mbr-section-btn align-center"><a href="https://postplaner.pl" class="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
            </div>
        </div>
        <div class="card py-3 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
                <div class="card-img">
                    <img src="assets/images/mltranseu.png" title="" alt="" />
                </div>
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mbr-bold align-center display-5">
                        ML TRANS</h4>
                    <div class="card-underline align-center">
                        <div class="line"></div>
                    </div>
                    <p class="mbr-text mbr-fonts-style align-center display-7">Strona firmy transportowej</p>

                </div>
                <div class="mbr-section-btn align-center"><a href="https://mltrans.eu" class="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
            </div>
        </div>
        <div class="card py-3 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
                <div class="card-img">
                    <img src="assets/images/lakinipl.png" title="" alt="" />
                </div>
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mbr-bold align-center display-5">
                        LAKINI</h4>
                    <div class="card-underline align-center">
                        <div class="line"></div>
                    </div>
                    <p class="mbr-text mbr-fonts-style align-center display-7">Sklep z obuwiem</p>

                </div>
                <div class="mbr-section-btn align-center"><a href="https://lakini.pl" class="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
            </div>
        </div>
        <div class="row row-content justify-content-center">
            <div class="card py-3 col-12 col-md-6 col-lg-4">
                <div class="card-wrapper">
                    <div class="card-img">
                        <img src="assets/images/rs-car.png" title="" alt="" />
                    </div>
                    <div class="card-box">
                        <h4 class="card-title mbr-fonts-style mbr-bold align-center display-5">
                            RS CAR</h4>
                        <div class="card-underline align-center">
                            <div class="line"></div>
                        </div>
                        <p class="mbr-text mbr-fonts-style align-center display-7">Wizytówka lakierni
                            samochodowej</p>

                    </div>
                    <div class="mbr-section-btn align-center"><a href="https://jakubskowronski.com/rscar" class="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
                </div>
            </div>

            <div class="card py-3 col-12 col-md-6 col-lg-4">
                <div class="card-wrapper">
                    <div class="card-img">
                        <img src="assets/images/hfb-broker-1910x969.png" title="" alt="" />
                    </div>
                    <div class="card-box">
                        <h4 class="card-title mbr-fonts-style mbr-bold align-center display-5">
                            HFB BROKER</h4>
                        <div class="card-underline align-center">
                            <div class="line"></div>
                        </div>
                        <p class="mbr-text mbr-fonts-style align-center display-7">
                            Strona brokera ubezpieczeń</p>
                    </div>
                    <div class="mbr-section-btn align-center"><a href="https://jakubskowronski.com/hfb" class="btn btn-success display-4">ODWIEDŹ STRONĘ</a></div>
                </div>
            </div>

            <div class="card py-3 col-12 col-md-6 col-lg-4">
                <div class="card-wrapper">
                    <div class="card-img">
                        <img src="assets/images/jsns-eu.png" title="" alt="" />
                    </div>
                    <div class="card-box">
                        <h4 class="card-title mbr-fonts-style mbr-bold align-center display-5">JS Soft</h4>
                        <div class="card-underline align-center">
                            <div class="line"></div>
                        </div>
                        <p class="mbr-text mbr-fonts-style align-center display-7">Rozszerzenia do CMS Joomla!
                        </p>
                    </div>
                    <div class="mbr-section-btn align-center"><a href="https://jsns.eu" class="btn btn-success display-4" target="_blank">ODWIEDŹ STRONĘ</a></div>
                </div>
            </div>
        </div>    
      </Row>
    </Container>
  </section>
)

export default Portfolio
