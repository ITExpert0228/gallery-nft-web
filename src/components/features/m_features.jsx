import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import featuresA from '../../assets/images/features/a.png';
import featuresB from '../../assets/images/features/b.png';
import featuresC from '../../assets/images/features/c.png';


class Features extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="featured-lists pd-t50">
              <ul>
                <li>
                  <Col className="pd-0 hidden-xs" sm={5}>
                    <div className="contents-l mr-b30">
                      <h2>HOW WILL THE SHAREHOLDERS EARN MONEY?</h2>
                      <p className="text-gold">
                        After we successfully launch Shareholders Gallery's NFT on December 28th 2021 - All focus will be directed towards the launch of Killer Cubs Gen 1: Featuring "Little Jay" - on February 22, 2022 (Killer Cubs is 90% completed)
                      </p>
                      <p>(All profits are paid out automatically and coded into the smart contract.) The predicted sell out total will be $3,000,000.</p>
                      <br/>
                      <p>Killer Cubs will have a total of 10,000 Nft's for sale. Prices will start at $100 and rise up to $500 per Nft by the end of 5 phases. PRE-SALE, PHASE 1 - PHASE 4</p>
                      <p className="text-gold">Max 25 Nft's per order</p>
                      {/*<Link to="#" className="btn1">read more</Link>*/}
                    </div>
                  </Col>
                  <Col className="pd-0" sm={7}>
                    <div className="imgs-l">
                      <Row>
                        <Col lg={10} md={10} sm={10} className="col-xs-12 col-md-offset-1 col-lg-offset-1">
                          <figure><img src={featuresA} alt="" /></figure>
                        </Col>
                        <Col lg={6} md={6} sm={6} className="col-xs-12 mr-t20">
                          <figure><img src={featuresB} alt="" /></figure>
                        </Col>
                        <Col lg={6} md={6} sm={6} className="col-xs-12 mr-t20">
                          <figure><img src={featuresC} alt="" /></figure>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                    <h2>Whitelist</h2>
                      <p>
                        There are 450 connections for our whitelists. <br />
                        30-40 connections will be added every day for members <br />
                        who assist the community through Twitter, Discord, Youtube <br />
                        and the others, until being launched.
                        Help to spread with the word, grow the lair, <br />
                        then have a chance to win a spot in the whitelist!
                      </p>
                      {/*<Link to="#" className="btn1">read more</Link>*/}
                    </div>
                  </Col>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
    if (this.props.animate) {
      console.log("Animate:", this.props.animate);
      con = (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="section-heading2">
                <ReactWOW animation={this.props.animate} duration="2s">
                  <h2>Our Features</h2>
                </ReactWOW>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="featured-lists">
                <ul>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Whitelist</h2>
                          <p>
                            There are 450 connections for our whitelists. <br />
                            30-40 connections will be added every day for members <br />
                            who assist the community through Twitter, Discord, Youtube <br />
                            and the others, until being launched.
                            Help to spread with the word, grow the lair, <br />
                            then have a chance to win a spot in the whitelist!
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={featuresA} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Whitelist</h2>
                          <p>
                            There are 450 connections for our whitelists. <br />
                            30-40 connections will be added every day for members <br />
                            who assist the community through Twitter, Discord, Youtube <br />
                            and the others, until being launched.
                            Help to spread with the word, grow the lair, <br />
                            then have a chance to win a spot in the whitelist!
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }

    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">
          {con}
        </section>
      </div>
    );
  }
}

export default Features;