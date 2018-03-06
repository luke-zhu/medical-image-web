import React, { Component } from 'react';
import { Layout } from 'antd';

import './App.css';

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
          disruptions by the stroke team waiting for rapid interpretation. 
          </p>
        </Content>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 200 }}>
          <h3>People</h3>
          <p>...</p>
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
