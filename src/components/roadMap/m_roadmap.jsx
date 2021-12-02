import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

class Roadmap extends Component {
  render() {
    let contents = (
      <React.Fragment>
        <section className="steps-details pd-t70">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="section-heading2">
                  <h2 className="text-first">ROAD MAP</h2>
                </div>
              </Col>
              <Col lg={10} md={10} sm={12} className="col-xs-12 col-md-offset-1 col-lg-offset-1">
                <div className="steps-cont">
                  <ul>
                    <li className="l-con">
                      <span><i className="fa fa-angle-down"></i></span>
                      <div className="cont">
                        <p>Shareholders Gallery will be selling 40% of the company in the form of an NFT. There will be a limited amount of Nft's available all in total equaling 40$</p>
                        <p>There will be a total of 2000 Shareholders Gallery Nft's sold<br/>
                          Pre-sale:  400 Nft's - $500 each<br/>
                          Phase 1:  1200 Nft's - $1000 each<br/>
                          Final Phase:  400 Nft's - $1500 each</p>
                        <p>1 NFT is equal to 0.02% ownership of Shareholders Gallery.<br />
                        50 NFT's equal 1% ownership of Shareholders Gallery.</p>
                      </div>
                      <span className="first"><i className="fa fa-users"></i></span>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p>10 ETH GIVE AWAY</p>
                        <p>We will give 50 random nft holders 0.2 Eth each. Just for holding 1 or more Shareholders Gallery Nft's.<br/>
                        (ETA on this drop is 2 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-check-square-o"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <p>20 Nft's will be withheld from the sale and randomly given out to anyone holding 1 or more Shareholder Gallery Nft's. Once the 20 Nft's are depleted the give away will end. (ETA on this drop will be 3 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-edit "></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p>5 ETH GIVE AWAY<br/>Top 25 people who help build our community via Discord, Twitter etc. will receive 0.2 Eth each. (ETA on this drop will be 5 weeks after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-university"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <p>Launch of Killer Cubs Generation 1 Featuring "Little Jay"<br/>
                        (ETA 2.22.2022)</p>
                      </div>
                      <span><i className="fa fa-edit"></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p>Launch Killer Cubs Generation 2 Featuring "Little Mikey" (ETA 5.22.2022)</p>
                      </div>
                      <span><i className="fa fa-university"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                        <p>Launch Killer Cubs Generation 3 Featuring "Little LeatherFace" (ETA 8.22.2022)</p>
                      </div>
                      <span><i className="fa fa-edit"></i></span>
                      <div className="mid-icons"></div>
                    </li>
                    <li className="r-con">
                      <div className="cont">
                        <p>Introduction of the Shareholder Gallery Clubhouse. Hang out and kick back with your fellow Shareholder Gallery Members in the Metaverse. (ETA 9~12 months after the sale ends)</p>
                      </div>
                      <span><i className="fa fa-university"></i></span>
                    </li>
                    <li className="l-con">
                      <div className="cont">
                      </div>
                      <span><i className="fa fa-edit"></i></span>
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