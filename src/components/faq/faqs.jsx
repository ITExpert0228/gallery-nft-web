import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import coin1 from "../../assets/images/icons/1.png";


class Faqs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle(v) {
    this.setState({ collapse: v == this.state.collapse ? 0 : v });
  }
  render() {
    const data = [
      {
        title: '1. WHAT IS SHAREHOLDERS GALLERY?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '2. HOW MANY NFT\'S WILL THERE BE AVAILABLE DURING THE LAUNCH OF SHAREHOLDERS GALLERY\'S NFT SALE.',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '3. WHAT PERCENTAGE OF THE COMPANY DOES 1 NFT BUY ME?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '4. HOW MANY NFT\'S DO I NEED TO BUY TO HOLD 1% OWNERSHIP OF SHAREHOLDERS GALLERY?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '5. HOW MUCH WILL 1 NFT COST?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '6. WHEN WILL SHAREHOLDERS GALLERY LAUNCH IT\'S FIRST PROJECT NFT? EXAMPLE KILLER CUBS...',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '7. HOW MANY NFT\'S WILL THERE BE AVAILABLE DURING THE LAUNCH OF KILLER CUBS GENERATION 1: FEATURING LITTLE JAY?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '8. IS THERE A SITE TO SEE KILLER CUBS IN DEVELOPMENT?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '9. WHAT IS THE SELLOUT PRICE FOR KILLER CUBS?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '10. HOW MUCH WOULD I EARN FROM THE KILLER CUBS NFT LAUNCH?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '11. WHAT ARE THE DIFFERENT WAYS I CAN EARN MONEY?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '12. WHEN DO WE START EARNING RESIDUALS?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '13. HOW MANY NFT\'S WILL YOU LAUNCH?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
      {
        title: '14. ONCE I BECOME A SHAREHOLDERS GALLERY OWNER, WHAT ARE MY RESPONSIBILITIES?',
        text: 'WHAT IS SHAREHOLDERS GALLERY?',
      },
    ];
    let con = (
      <Container>
        <Row>
          <Col lg={8} md={8} sm={10} className="col-xs-12 col-md-offset-2 col-lg-offset-2">
            <div className="section-heading2">
              <h2>FAQS</h2>
              {
                data.map((obj, i) => (
                   <p>
                  <CardHeader onClick={() => this.toggle(i+1)}>
                    <span className="font-weight-bold">{obj.title}</span>
                  </CardHeader>
                  <Collapse isOpen={this.state.collapse == i+1}>
                    <Card>
                      <CardBody>
                        {obj.text} {i}
                      </CardBody>
                    </Card>
                  </Collapse>
                   </p>
                ))
              }
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