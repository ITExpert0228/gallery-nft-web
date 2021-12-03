import React, { Component, Fragment } from 'react';
import About from '../components/about/m_about';
import Features from '../components/features/m_features';
import Roadmap from '../components/roadMap/m_roadmap';
import Tokens from '../components/token/m_tokens';
import MainSlider from '../components/mainSlider/m_mainSlider';
import Products from '../components/products/m_products';
import Previews from '../components/previews/previews';
import Faqs from '../components/faq/faqs';

class M_HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="wd_scroll_wrap">
          <div style={{"paddingTop":"52px", "background": "#052743"}}></div>
          <div style={{"paddingTop":"8px", "background": "#F2D969"}}></div>
          <MainSlider />
          <div style={{"paddingTop":"25px", "background": "#F2D969"}}></div>
          <About />
        </div>
        <div className="wd_scroll_wrap">
            <Previews />
        </div>
        <div className="wd_scroll_wrap">
          <Tokens />
        </div>
        <Roadmap />
        <Faqs />
        <div className="wd_scroll_wrap">
          <div style={{"paddingTop":"18px", "background": "#F2D969"}}></div>
          <Features />
        </div>
        <Products />
      </Fragment>
    );
  }
}

export default M_HomePage;
