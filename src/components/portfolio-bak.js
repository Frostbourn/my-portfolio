<Row className="blog-block justify-content-around">
            <Col md={12}>
              <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
                <strong>
                  LATEST WORK <Emoji symbol="🏆" label="contact" />
                </strong>
              </h2>
              <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
                Here are some of my recent works.
              </h3>
            </Col>
            <Col md={12}>
              <h2 className="mbr-section-title mbr-fonts-style align-left display-2 py-3"></h2>
            </Col>
            {data.githubViewer.pinnedItems.nodes.map((repository, i) => (
              <div
                className="card py-3 col-sm-12 col-md-12 col-lg-12"
                key={repository.id}
              >
                <Fade bottom duration={1000} distance="20px" triggerOnce>
                  <Fade cascade delay="1800" damping="1" triggerOnce>
                    <div className="card-wrapper">
                      <div
                        className="repo-card-div"
                        onClick={() => openRepoinNewTab(repository.url)}
                        onKeyDown={() => openRepoinNewTab(repository.url)}
                        role="presentation"
                      >
                        <Badge variant="success">Open Source</Badge>
                        <div className="repo-name-div">
                          <svg
                            aria-hidden="true"
                            className="octicon"
                            height="20"
                            role="img"
                            viewBox="0 0 12 16"
                            width="14"
                            className="repo-svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                            ></path>
                          </svg>
                          <p className="repo-name">{repository.name}</p>
                        </div>
                        <p className="repo-description">
                          {repository.description}
                        </p>
                        <div className="repo-stats">
                          <div className="repo-left-stat">
                            <span>
                              <div
                                className="language-color"
                                style={{
                                  backgroundColor:
                                    repository.primaryLanguage.color,
                                }}
                              ></div>
                              <p>{repository.primaryLanguage.name}</p>
                            </span>
                            <span>
                              <svg
                                aria-hidden="true"
                                className="octicon"
                                height="20"
                                role="img"
                                viewBox="0 0 10 16"
                                width="12"
                                fill="rgb(106, 115, 125)"
                                className="repo-star-svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                ></path>
                              </svg>
                              <p>{repository.forkCount}</p>
                            </span>
                            <span>
                              <svg
                                aria-hidden="true"
                                className="octicon"
                                height="20"
                                role="img"
                                viewBox="0 0 14 16"
                                width="14"
                                fill="rgb(106, 115, 125)"
                                className="repo-star-svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                                ></path>
                              </svg>
                              <p>{repository.stargazers.totalCount}</p>
                            </span>
                          </div>
                          <div className="repo-right-stat">
                            <p>{repository.diskUsage} KB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Fade>
              </div>
            ))}
            <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://postplaner.pl")}
                  onKeyDown={() => openRepoinNewTab("https://postplaner.pl")}
                  role="presentation"
                >
                  {" "}
                  <div className="card-img">
                    <Img fluid={data.portfolioOne.childImageSharp.fluid} />
                  </div>
                  <div className="repo-card-div">
                    {/* <Badge variant="warning">Commercial</Badge> */}
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        POST PLANER
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Social media post planner
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://mltrans.eu")}
                  onKeyDown={() => openRepoinNewTab("https://mltrans.eu")}
                  role="presentation"
                >
                  <div className="card-img">
                    <Img fluid={data.portfolioTwo.childImageSharp.fluid} />
                  </div>
                  <div className="repo-card-div">
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        ML TRANS
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Transport and logistic comapny website
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            {/* <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://lakini.pl")}
                  onKeyDown={() => openRepoinNewTab("https://lakini.pl")}
                  role="presentation"
                >
                  <div className="repo-card-div">
                    <div className="card-img">
                      <Img fluid={data.portfolioThree.childImageSharp.fluid} />
                    </div>
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        LAKINI
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        eCommerce shoes store
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div> 
            <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() =>
                    openRepoinNewTab("https://jakubskowronski.com/rscar")
                  }
                  onKeyDown={() =>
                    openRepoinNewTab("https://jakubskowronski.com/rscar")
                  }
                  role="presentation"
                >
                  <div className="repo-card-div">
                    <div className="card-img">
                      <Img fluid={data.portfolioFour.childImageSharp.fluid} />
                    </div>
                    <div className="card-box">
                      <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                        RS CAR
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="mbr-text mbr-fonts-style align-center display-7">
                        Car paint shop website
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>*/}
            <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() =>
                    openRepoinNewTab("https://jakubskowronski.com/hfb")
                  }
                  onKeyDown={() =>
                    openRepoinNewTab("https://jakubskowronski.com/hfb")
                  }
                  role="presentation"
                >
                  <div className="card-img">
                    <Img fluid={data.portfolioFive.childImageSharp.fluid} />
                  </div>
                  <div className="repo-card-div">
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        HFB BROKER
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Insurance broker website
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            {/* <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://jsns.eu")}
                  onKeyDown={() => openRepoinNewTab("https://jsns.eu")}
                  role="presentation"
                >
                  <div className="repo-card-div">
                    <div className="card-img">
                      <Img fluid={data.portfolioSix.childImageSharp.fluid} />
                    </div>
                    <div className="card-box">
                      <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                        JS Soft
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="mbr-text mbr-fonts-style align-center display-7">
                        Wordpress & Joomla plugins store
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div> */}
            <div
              class="rounded-lg relative overflow-hidden cursor-pointer border project-block p-8 text-left load-hidden v-scroll-reveal"
              style="background-image: linear-gradient(147deg, rgb(251, 219, 54) 0%, rgb(252, 213, 12) 100%); visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0s;"
              data-sr-id="27"
            >
              <div
                class="project-block__titles absolute z-20 left-0 py-8 pl-8 pr-4 w-full"
                style="top:0;bottom:auto;"
              >
                <h4
                  class="uppercase text-sm md:text-base font-bold tracking-wider mb-2 opacity-75 load-hidden v-scroll-reveal"
                  style="color:#AA9009; visibility: visible; opacity: 0.75; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0s;"
                  data-sr-id="25"
                >
                  University of Amsterdam
                </h4>{" "}
                <h3
                  class="font-black text-3xl md:text-4xl leading-tight load-hidden v-scroll-reveal"
                  style="color:#222222; visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0s;"
                  data-sr-id="26"
                >
                  Matching platform for students &amp; companies
                </h3>
              </div>
            </div>
          </Row>
          <Row>
            <p class="display-2 py-5 align-center">
              <strong>Want to see more? Leave me a message!</strong>
            </p>
          </Row>