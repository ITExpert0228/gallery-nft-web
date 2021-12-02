import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

class Roadmap extends Component {
  render() {
    let contents = (
      <React.Fragment>
        <section className="steps-area section">
          <Container>
            <Row>
              <Col lg={11} md={11} sm={12} className="col-xs-12">
                <div className="steps-heading">
                  <h2>Roadmap Activations</h2>
                  <span>This is a roadmap</span>
                  <div className="right-con">
                    <span>Scroll Down</span>
                    <Link to="#steps"><i className="fa fa-angle-down"></i></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="steps-details">
          <Container>
            <Row>
              <Col lg={10} md={10} sm={12} className="col-xs-12 col-md-offset-1 col-lg-offset-1">
                <div className="steps-cont">
                  <ul>
                    <li className="l-con">
                      <div className="cont">
                        <h2>Killer Cubs Gen 1: Featuring "Little Jay"</h2>
                        <p>(Once each phase ends, the next phase will immediately begin)</p>
                        <p>Pre-sale: 1000 Nft's for $100 each<br/>
                          Phase 1:  2250 Nft's for $150 each<br/>
                          Phase 2:  2250 Nft's for $200 each<br/>
                          Phase 3:  2250 Nft's for $250 each<br/>
                          Phase 4:  2250 Nft's for $500 each<br/>

                          Max 20 Nft's per order</p>
                      </div>
                      <span><i className="fa fa-users"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>Step 1 </h2>
                        <p>10 ETH GIVE AWAY</p>
                        <p>The top 10 Killer Cubs Holders will each receive 1 ETH. </p><p>(ETA on this drop is 2 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-check-square-o"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <h2>Step 2</h2>
                        <p>100 Random Killer Cubs will be withheld from the sale and will be randomly given out to holders who are holding 10 Killer Cubs Nft's or more.  Once the 100 Nft's are depleated the give away will end. (ETA on this drop will be 3 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-edit "></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>Step 3</h2>
                        <p>All Killer Cubs holders holding 1 or more Killer Cubs Nft's will get a special companion; a victim cub..  Killed by "Little Jay" - (ETA on this drop will be 4 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-university"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <h2>Step 4</h2>
                        <p>5 ETH GIVE AWAY</p>
                        <p>The top 5 Killer Cubs Holders will each receive 1 ETH.</p>
                        <p>Prior holders who have already won will be excluded from this give away. (ETA on this drop will be 5 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-bell"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>Step 5</h2>
                        <p>A Comic Book and story line specificly about Little Jay along with his vitims and how it all began... (ETA 4 months after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-paw"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <h2>Step 6</h2>
                        <p>It gets cold during hybernation period. Merch release. (ETA 6 months after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-paw"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <h2>Step 7</h2>
                        <p>Introduction of the Cave, the Killer Clubhouse. Hang out and kick back with your fellow Killer Cubs in the Metaverse. (ETA 9 months after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-paw"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <h2>Step 8</h2>
                        <p>Killer Cubs Gen 2 teaser: Featuring ("Little Mikey" and "Little Lecter")</p>
                      </div>
                      <span><i className="fa fa-paw"></i></span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
    if (this.props.animate) {
      contents = (
        <React.Fragment>
          <section className="steps-area section">
            <Container>
              <Row>
                <Col lg={11} md={11} sm={12} className="col-xs-12">
                  <div className="steps-heading">
                    <ReactWOW animation={this.props.animate} duration="1s">
                      <h2>Few Steps For a Loan</h2>
                    </ReactWOW>
                    <div className="right-con">
                      <span>Scroll Down</span>
                      <Link to="#steps"><i className="fa fa-angle-down"></i></Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="steps-details">
            <Container>
              <Row>
                <Col lg={10} md={10} sm={12} className="col-xs-12 col-md-offset-1 col-lg-offset-1">
                  <div className="steps-cont">
                    <ul>
                      <li className="l-con">
                        <ReactWOW animation={this.props.animate} duration="1s">
                          <div className="cont">
                            <h2>01. Registration On The Platform</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur  <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-users"></i></span>
                      </li>
                      <li className="r-con">
                        <ReactWOW animation={this.props.animate} duration="1.3s">
                          <div className="cont">
                            <h2>02. Passing Verification</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-check-square-o"></i></span>
                      </li>
                      <li className="l-con">
                        <ReactWOW animation={this.props.animate} duration="1.6s">
                          <div className="cont">
                            <h2>03. Creating An Application For a Loan</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-edit "></i></span>
                        <div className="mid-icons"></div>
                      </li>
                      <li className="r-con">
                        <ReactWOW animation={this.props.animate} duration="1.9s">
                          <div className="cont">
                            <h2>04. Financing a Loan</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur
                                            <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-university"></i></span>
                      </li>
                      <li className="l-con">
                        <ReactWOW animation={this.props.animate} duration="2.1s">
                          <div className="cont">
                            <h2>05. Activating a Loan</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-bell"></i></span>
                      </li>
                      <li className="r-con">
                        <ReactWOW animation={this.props.animate} duration="2.4s">
                          <div className="cont">
                            <h2>06. Receiving Funds</h2>
                            <p>Nam in lectus eget nisi aliquam ultrices. Aliquam at efficitur <br />nulla. Cras sodales eu nibh vel scelerisque. </p>
                          </div>
                        </ReactWOW>
                        <span><i className="fa fa-paw"></i></span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </React.Fragment>
      )
    }
    return (
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        {contents}
      </div>
    );
  }
}

export default Roadmap;