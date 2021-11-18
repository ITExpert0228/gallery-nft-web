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
          <MainSlider />
          <About fill="#10122d" />
        </div>
        <div className="wd_scroll_wrap">
            <Previews />
        </div>
        <Features animate='shakeX' />
        <Roadmap fill="#10122d" />
        <div className="wd_scroll_wrap">
          <Tokens />
          <Teams fill="#10122d" />
        </div>
        <Faqs />
      </Fragment>
    );
  }
}

export default M_HomePage;