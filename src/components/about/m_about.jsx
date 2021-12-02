import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import aboutimg from '../../assets/images/about/1.png';
import poster from "../../assets/images/video/1.png";

class About extends Component {
  render() {
    let page = (
      <Row>
        <Col lg={5} md={6} sm={12} className="col-xs-12">
          <div className="about-content">
            <h2 className="f-40 fw-400">
              ABOUT SHAREHOLDERS GALLERY
            </h2>
            <p>Introducing the world's first Nft Gallery Launching as an Nft!</p>
            <p>In addition to being very rare, this opportunity is also very limited.</p>
            <p>Shareholders Gallery is selling 2000 Nfts to the public. Each Nft is worth 0.02% ownership of Shareholders Gallery.</p>
            
            <p>As a Shareholder you will benefit from:</p>
            <p>1. All Sales from each Nft we launch (new Nft launch every 3 months) <br />
            2. Residules when sold Nft's are re-sold <br />
            3. All merchandise sold by Shareholder Gallery <br />
            4. Growing value of the Nft's</p>
            
            <div className="buttons">
              <Link to="#" className="btnGold">Road map</Link>
              <Link to="#" className="btnGold">Become a SHAREHOLDER!</Link>
            </div>
          </div>
        </Col>
        <Col lg={7} md={6} sm={12} className="col-xs-12">
          <div className="about-img">
            <img src={aboutimg} alt="about" />
          </div>
        </Col>
      </Row>
    )
    if (this.props.animate) {
      page = (
        <Row>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <div className="about-content">
              <ReactWOW animation={this.props.animate} duration="1s">
                <h2 className="f-40 fw-400">
                  ABOUT SHAREHOLDERS GALLERY
                    </h2>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <p>KILLER CUBS is a lending and investment, multicurrency and multifunctional online platform based on blockchain technology. There investors and borrowers meet each other and have the opportunity to lend money on mutually beneficial.</p>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.6s">
                <p>KILLER CUBS is a unique service that allows individuals to access loans from the comfort of their home in fiat currencies or crypto-currencies.</p>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.9s">
                <p>KILLER CUBS is a multi-functional platform which allows each participant to keep money in a multi-currency online wallet, buy and sell currency on the exchange, invest money, get a loan in a convenient currency.</p>
              </ReactWOW>
              <div className="buttons">
                <Link to="#" className="btn1">WHITEPAPER</Link>
                <Link to="#" className="btn3">Buy Tokens Now!</Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <ReactWOW animation={this.props.animate} duration="1s">
              <div className="about-img">
                <img src={aboutimg} alt="about" />
              </div>
            </ReactWOW>
          </Col>
        </Row>
      )
    }
    return (
      <div id='about' className="wd_scroll_wrap wd_scroll">
        <div className="about-area pd-t100 pd-b100">
          <Container>
            {page}
          </Container>
        </div>
      </div>
    );
  }
}

export default About;