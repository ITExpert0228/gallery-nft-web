import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Faqs extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h2>FAQs</h2>
              <p>this is a faq section</p>
            </div>
          </Col>
        </Row>
      </Container>
    )
    return (
      <div id="faq" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">
          {con}
        </section>
      </div>
    );
  }
}

export default Faqs;