import React, { Component } from 'react';
import { Layout } from 'antd';

import './App.css';
import Carousel from './carousel.js';

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
          <Content style={{ background: '#333' }}>
            <div class="topnav">
              <a class="active" href="#home">Home</a>
              <a href="#overview">Overview</a>
              <a href="#projects">Projects</a>
              <a href="#people">People</a>
              <a href="#updates">Updates</a>
            </div>
          </Content>
          <Content style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            padding: 40,
            margin: 0,
            minHeight: 200,
          }}>
            <h3 id="overview"> Overview</h3>
            <p style={{
              textAlign: 'center',
              marginLeft: 15,
              marginRight: 15,
              paddingLeft: 30,
              paddingRight: 30,
            }}>
              We are an interdisciplinary research team developing a suite of deep machine
              learning models to solve high-impact problems in medical data analysis and prediction.
              Our projects involve the learning, development and application of machine learning
              (specifically deep learning) over real-world medical imaging data sets for real
              problems. We hope to make a significant impact on patient outcomes, as well as the
              productivity of medical staff.
            </p>
          </Content>
          <Content style={{ padding: 30, margin: 0, minHeight: 200 }}>
            <div id="wrapper">
              <div id="left" style={{ paddingLeft: 20 }}>
                <h3 id="projects">Projects</h3>
                <h4>Emergent Large Vessel Occlusion “ELVO"</h4>
                <p>
                  An ELVO, or “emergent large vessel occlusion,” is a particularly severe category
                  of
                  stroke
                  whereby one of the major blood vessels feeding the brain is blocked. Time is
                  incredibly integral
                  to ensuring patient independency and survival, and manual occlusion delineation
                  can be time-consuming. </p>
                <p>
                  Recent deep learning advancements display great promise to
                  automate ELVO detection, accelerate downstream care delivery,
                  and improve patient outcomes. We use deep learning to improve a
                  radiologist’s workflow and prevent unnecessary
                  disruptions by the stroke team waiting for rapid interpretation.
                </p>
              </div>
              <div class="right">
                <div class="container">
                  {<Carousel/>}
                </div>
                <div id="caption">
                  <p> Examples of CTA ELVOs </p>
                </div>
              </div>
            </div>
          </Content>
          <Content style={{ background: '#fff', padding: 50, margin: 0, minHeight: 200 }}>
            <h3 id="people"> People</h3>
            <p>
              Mary P. Dong, mary_dong@brown.edu <br/>
              Yun Ho Kim, yun_ho_kim@brown.edu <br/>
              Matthew T. Stib, M.D., matthew.stib@lifespan.org <br/>
              Sumera S. Subzwari, sumera_subzwari@brown.edu <br/>
              Harold J. Triedman, harold_triedman@brown.edu <br/>
              Anthony D. Yao, anthony_yao@brown.edu <br/>
              Amy Wang, amy_wang3@brown.edu <br/>
              Luke L. Zhu, luke_zhu@brown.edu <br/>
              Grayson Baird, PhD, gbaird@lifespan.org <br/>
              Jerrold L. Boxerman, M.D. PhD, jboxerman@lifespan.org <br/>
              Ugur Cetintemel, PhD, ucetintemel@brown.edu <br/>
              Ryan A. McTaggart, M.D., ryan.mctaggart@lifespan.org <br/>
            </p>
          </Content>
          <Content style={{ padding: 50, margin: 0, minHeight: 200 }}>
            <h3 id="updates">Updates</h3>
            <p> (June 2018) 90% validation accuracy achieved on 977 CTA images </p>
            <p> (February 2018) Group selected as a recipient of a Karen T. Romer Award</p>
            <p><a
                href="https://www.brown.edu/academics/college/fellowships/utra/sites/brown.edu.academics.college.fellowships.utra/files/uploads/Medical%20Imaging%20Data%20Analytics%20with%20Deep%20Learning-Ugur%20Cetintemel%20and%20Ryan%20McTaggart.pdf">
              Summer 2018 I-UTRA Proposal Released
            </a></p>
          </Content>
          <Content style={{ padding: 50, margin: 0, minHeight: 200 }}>
            <h3 id="acknowledgements">Acknowledgements</h3>
            <img
                style={{ maxWidth: 200 }}
                src="https://cloud.google.com/_static/6476e1724a/images/cloud/cloud-logo.svg"
                className="devsite-site-logo"
                alt="Google Cloud"/>
          </Content>
        </Layout>
    );
  }
}

export default App;
