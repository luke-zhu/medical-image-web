import React, { Component } from 'react';
import { Layout } from 'antd';

import './App.css';
import Carousel from './carousel.js'

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {

  render() {
    return (
      <Layout>
        <Header style={{ color: 'white' }}>
          <a href="http://www.brown.edu">
            <img
              src="https://www.brown.edu/academics/college/fellowships/utra/sites/all/themes/ursa-minor/img/brown-logo.png"
              alt="Brown University shield"
              height="48"
              style={{ paddingRight: 10 }}
            />
          </a>
          Medical Image Data Analytics Group
        </Header>
        <Content style={{ background: '#333'}}>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#overview">Overview</a>
            <a href="#projects">Projects</a>
            <a href="#people">People</a>
            <a href="#updates">Updates</a>
          </div>
        </Content>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 200 }}>
          <h3 id="overview"> Overview</h3>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 200 }}>
          <h3>Overview</h3>
          <p>
            We are an interdisciplinary research team developing a suite of deep machine
            learning models to solve high-impact problems in medical data analysis and prediction.
            Our projects involve the learning, development and application of machine learning
            (specifically deep learning) over real-world medical imaging data sets for real
            problems. We hope to make a significant impact on patient outcomes, as well as the
            productivity of medical staff.
          </p>
        </Content>
        <Content style={{ padding: 24, margin: 0, minHeight: 200 }}>
          <h3 id="projects">Projects</h3>
          <h3>Projects</h3>
          <h4>Intracranial hemorrhage</h4>
          <p>
            Intracranial hemorrhage (ICH) is a general term that describes abnormal bleeding within the
            skull. ICH may result from either traumatic (i.e,. car accident) or non-traumatic injuries.
            We use deep learning to accurately pass “normal” brain CTs, giving
            radiologists more time to interpret the abnormalities. 
          </p>
          <h4>Emergent Large Vessel Occlusion “ELVO"</h4>
          <p>
          An ELVO, or “emergent large vessel occlusion,” is a particularly severe category of stroke
          whereby one of the major blood vessels feeding the brain is blocked. We use deep learning to
          improve a radiologist’s workflow and prevent unnecessary
          disruptions by the stroke team waiting for rapid interpretation.  </p>
          <p> Examples of ELVO CTAs: </p>
        </Content>
        <Content>
          <div class="container"> {<Carousel />} </div>
        </Content>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 200 }}>
          <h3 id="people"> People</h3>
          <p>
          Sumera S. Subzwari, sumera_subzwari@brown.edu <br />
          Matthew T. Stib, M.D., matthew.stib@lifespan.org <br />
          Mary P. Dong, mary_dong@brown.edu <br />
          Amy Wang, amy_wang3@brown.edu <br />
          Yun Ho Kim, yun_ho_kim@brown.edu <br />
          Harold J. Triedman, harold_triedman@brown.edu <br />
          Luke L. Zhu, luke_zhu@brown.edu <br />
          Anthony D. Yao, anthony_yao@brown.edu <br />
          Jerrold L. Boxerman, M.D. PhD, jboxerman@lifespan.org <br />
          Grayson Baird, PhD, gbaird@lifespan.org <br />
          Ryan A. McTaggart, M.D., ryan.mctaggart@lifespan.org <br />
          Ugur Cetintemel, PhD, ucetintemel@brown.edu <br />   
          </p>
        </Content>
        <Content style={{ padding: 24, margin: 0, minHeight: 200 }}>
          <h3 id="updates">Updates</h3>
          <p> (June 2018) 90% validation accuracy achieved on 977 CTA images </p>
          disruptions by the stroke team waiting for rapid interpretation. 
          </p>
        </Content>
        <Content style={{ padding: 24, margin: 0, minHeight: 200 }}>
          <h3>Updates</h3>
          <p>Group selected as a recipient of a Karen T. Romer Award</p>
          <p><a href="https://www.brown.edu/academics/college/fellowships/utra/sites/brown.edu.academics.college.fellowships.utra/files/uploads/Medical%20Imaging%20Data%20Analytics%20with%20Deep%20Learning-Ugur%20Cetintemel%20and%20Ryan%20McTaggart.pdf">
            Summer 2018 I-UTRA Proposal Released
          </a></p>
        </Content>
      </Layout>
    );
  }
}

export default App;
