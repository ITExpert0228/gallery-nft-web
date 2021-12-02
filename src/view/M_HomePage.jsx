import React, { Component, Fragment } from 'react';
import About from '../components/about/m_about';
import Features from '../components/features/m_features';
import Roadmap from '../components/roadMap/m_roadmap';
import Tokens from '../components/token/m_tokens';
import MainSlider from '../components/mainSlider/m_mainSlider';
import Teams from '../components/team/m_team';
import Previews from '../components/previews/previews';
import Faqs from '../components/faq/faqs';

class M_HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="wd_scroll_wrap">
          <div style={{"padding-top":"52px", "background": "#052743"}}></div>
          <div style={{"padding-top":"8px", "background": "#F2D969"}}></div>
          <MainSlider />
          <div style={{"padding-top":"25px", "background": "#F2D969"}}></div>
          <About />
        </div>
        <div className="wd_scroll_wrap">
            <Previews />
        </div>
        <div className="wd_scroll_wrap">
          <Tokens />
        </div>
        <Roadmap />
        <div className="wd_scroll_wrap">
          <Teams />
        </div>
        <Faqs />
      </Fragment>
    );
  }
}

export default M_HomePage;
