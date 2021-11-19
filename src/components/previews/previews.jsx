import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import sample1 from '../../assets/images/arts/1.png';
import sample2 from '../../assets/images/arts/2.png';
import sample3 from '../../assets/images/arts/3.png';
import sample4 from '../../assets/images/arts/4.png';

class Previews extends Component {
  componentDidMount() {
    $('.blog-slider .item').hover(
      function() {
        $(this)
          .closest('.blog-slider')
          .addClass('active');
      },
      function() {
        $(this)
          .closest('.blog-slider')
          .removeClass('active');
      }
    );
  }
  render() {
    const data = [
      {
        image: sample1,
      },
      {
        image: sample2,
      },
      {
        image: sample3,
      },
      {
        image: sample4,
      },
      {
        image: sample1,
      },
      {
        image: sample2,
      },
      {
        image: sample3,
      },
      {
        image: sample4,
      }
    ];
    const options = {
      slideSpeed: 500,
      autoplay: true,
      rewind: true,
      margin: 0,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
    const Items = ({ image }) => (
      <Col lg={12} md={12} sm={12} className="col-xs-12 item">
        <div className="blog">
          <figure>
            <img src={image} alt="" />
          </figure>
        </div>
      </Col>
    );

    return (
      <div id="news" className="wd_scroll_wrap wd_scroll">
        <section className="blog-area section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="section-heading2">
                  {this.props.animate ? (
                    <ReactWOW animation={this.props.animate} duration="1s">
                      <h2>PREVIEWS OF SHAREHOLDER NFT</h2>
                    </ReactWOW>
                  ) : (
                    <h2>PREVIEWS OF SHAREHOLDER NFT</h2>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <div className="blog-slider">
                <OwlCarousel ref="carousel" options={options}>
                  {data.map((obj, i) => (
                    <Items
                      key={i}
                      image={obj.image}
                      title={obj.title}
                      date={obj.date}
                      text={obj.text}
                    />
                  ))}
                </OwlCarousel>
              </div>
              {/* <div className="view-btn col-xs-12">
                <Link to="#">All News</Link>
              </div> */}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Previews;
