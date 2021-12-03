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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu
                      ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.
                      </p>
                  </Card>

                  <Card title="2. HOW MANY NFTS WILL THERE BE AVAILABLE DURING THE LAUNCH OF SHAREHOLDERS GALLERY'S NFT SALE?" adClass="card-accordion">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.
                      In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget
                      massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor,
                      orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere
                      gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis
                      ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa.
                      Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut
                      egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor
                      iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.
                      </p>
                  </Card>

                  <Card title="3. WHAT PERCENTAGE OF THE COMPANY DOES 1 NFT BUY ME?" adClass="card-accordion">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.
                      In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.
                      </p>
                  </Card>

                  <Card title="4. HOW MANY NFTS DO I NEED TO BUY TO HOLD 1% OWNERSHOP OF SHAREHOLDERS GALLERY?" adClass="card-accordion">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum
                      vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec
                      pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor
                      elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla,
                      fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor
                      tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at
                      massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.
                      </p>
                  </Card>

                  <Card title="5. HOW MUCH WILL 1 NFT COST?" adClass="card-accordion">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.
                      In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                      eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere
                      auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis
                      ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus.
                      Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa.
                      Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero.
                      Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar,
                      odio orci sodales odio, ac pulvinar felis quam sit.
                      </p>
                  </Card>

                  <Card title="6. WHEN WILL SHAREHOLDERS GALLERY LAUCH ITS FIRST PROJECT NFT? EXAMPLE KILLER CUBS" adClass="card-accordion">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.
                      In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                      eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere
                      auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis
                      ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus.
                      Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa.
                      Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero.
                      Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar,
                      odio orci sodales odio, ac pulvinar felis quam sit.
                      </p>
                  </Card>

                  <Card title="7. HOW MANY NFTS WILL THERE BE AVAILABLE DURING THE LANUNCH OF KILLER CUBS GENERATION 1: FEATURING LATTLE JAY?" adClass="card-accordion">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius.
                      In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat
                      eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere
                      auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis
                      ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus.
                      Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa.
                      Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero.
                      Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar,
                      odio orci sodales odio, ac pulvinar felis quam sit.
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