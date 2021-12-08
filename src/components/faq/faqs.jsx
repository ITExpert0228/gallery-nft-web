import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Accordion from '../accordion/accordion';
import Card from '../accordion/card';

class Faqs extends Component {
  render() {
    let con = (
      <Container>
        <Row className="d-flex flex-wrap">
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h2>FAQS</h2>
            </div>
          </Col>

          <Col lg={9} md={12} sm={12} className="col-xs-12 mr-auto ml-auto">
            <div id="accordion">
              <Accordion adClass="accordion-simple">
                <Card title="1. WHAT IS SHAREHOLDERS GALLERY?" adClass="card-accordion">
                  <p>
                    Shareholders Gallery is the world's first nft gallery that is being launched as an Nft. Offering 40% ownership to the public.
                  </p>
                </Card>

                <Card title="2. HOW MANY NFTS WILL THERE BE AVAILABLE DURING THE OFFICIAL LAUNCH OF SHAREHOLDERS GALLERY?" adClass="card-accordion">
                  <p>There will be a total of 2000 Nft's.
                  </p>
                </Card>

                <Card title="3. WHAT PERCENTAGE OF THE COMPANY DOES 1 NFT BUY ME?" adClass="card-accordion">
                  <p>1 Nft is worth a 50th of 1% of the company.
                  </p>
                </Card>

                <Card title="4. HOW MANY NFT'S DO I NEED TO BUY TO HOLD 1% OWNERSHIP OF SHAREHOLDERS GALLERY?" adClass="card-accordion">
                  <p>You would need to buy 50 Nft's to own 1% of Shareholders Gallery.
                  </p>
                </Card>

                <Card title="5. HOW MUCH WILL 1 NFT COST?" adClass="card-accordion">
                  <p>Pre-sale&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 800 Nft's for $500 each<br/>
                  Phase 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 1000 Nft's for $1000 each<br/>
                  Final Phase&nbsp;= 200 Nft's for $1500 each</p>
                </Card>

                <Card title="6. WHEN WILL SHAREHOLDERS GALLERY LAUNCH IT'S FIRST PROJECT NFT?  EXAMPLE KILLER CUBS..." adClass="card-accordion">
                  <p>Shareholders Galleries first launch will be 
                  </p>
                  <p>Killer Cubs Nft Collection: <br/>
                  Generation 1: Featuring Little Jay, on 2.22.22- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total 10,000 Nft's<br/>
                  Generation 2: Featuring Little Mikey, on 5.22.22- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total 10,000 Nft's<br/>
                  Generation 3: Featuring Little LeatherFace 8.22.22- &nbsp;Total 10,000 Nft's<br/>
                  </p>
                </Card>

                <Card title="7. HOW MANY NFT'S will there be available during the the launch of Killer Cubs Generation 1: Little Jay?" adClass="card-accordion">
                  <p>There will be a total of 10,000 Little Jay Nft's.
                  </p>
                </Card>

                <Card title="8. IS THERE A SITE TO SEE KILLER CUBS IN  DEVELOPMENT?" adClass="card-accordion">
                  <p>Yes it's <a href="https://KillerCubs.com">https://KillerCubs.com </a>
                  </p>
                </Card>

                <Card title="9. WHAT IS THE SELLOUT PRICE FOR KILLER CUBS?" adClass="card-accordion">
                  <p>We anticipate a rapid sellout. Once all Little Jay Nft's are sold, the total amount in sales should come to 3 million.
                  </p>
                </Card>

                <Card title="10. HOW MUCH WOULD I EARN FROM THE KILLER CUBS NFT LAUNCH?" adClass="card-accordion">
                  <p>If you are holding 1 Nft, you would earn $600.  If you were holding 50 Nft's you would own 1% of the company and you would earn $30,000.  Remember that is only the first of many launches.<br/><br/>
                  We currently plan on a sellout total of $3 million for Generation 1: Featuring Little Jay...
                  </p>
                </Card>

                <Card title="11. WHAT ARE THE DIFFERENT WAY I CAN EARN MONEY?" adClass="card-accordion">
                  <p>
                  1) You will earn a profit from every Nft launch. <br/><br/>
                  2) You will earn a residule profit every time a sold Nft get's re-sold.<br/><br/>
                  3) You will earn money from any merchandise sold<br/><br/>
                  4) You also earn when the value of this Nft goes up. (most people are not going to sell these. Supply and demand dictates and a 10x on your value is not unpresidented.)
                  </p>
                </Card>

                <Card title="12. WHEN DO WE START EARNING RESIDUALS?" adClass="card-accordion">
                  <p>When an already sold Nft is re-sold on the open market via Opensea, we as a company earn 10% and you as a share holder will also earn a percentage. Remember, its not just the first time they re-sell...  It's every time for ever...  That is powerful...
                  <br/><br/>
                  Each time we launch a new Nft, you will get a new 10,000 nft's that will start earning you residuals.
                  </p>
                </Card>

                <Card title="13. HOW MANY NFT'S WILL YOU LAUNCH?" adClass="card-accordion">
                  <p>At this time we plan on launching a new Nft every 3 months for the forseeable future...<br/><br/>

                  We think that Killer Cubs alone can have 10 generations...<br/>
                  Our next cool collection will be decided in our discord community and share holders owners will have a say in the direction the company goes as it pertains to new art collections...
                  </p>
                </Card>

                <Card title="14. ONCE I BECOME A SHAREHOLDERS GALLERY OWNER, WHAT ARE MY RESPONSIBILITES?" adClass="card-accordion">
                  <p>This is 100% passive...  Once you buy in (meaning buy Nft's) you are a shareholder and you need not do anything but collect your money from the launches that are held every 3 months...<br/>
                  You do not need to spend any money on advertising, etc.  <br/>
                  This is really what makes this opportunity simply irrisistable...<br/>
                  </p>
                </Card>
              </Accordion>
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
        <div className="horizon-divider bg-secondary" style={{ height: '25px' }}></div>
      </div>
    );
  }
}

export default Faqs;