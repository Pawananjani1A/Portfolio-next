import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Pawananjani Kumar - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Pawananjani Kumar and I am a full-stack web developer and  competitive programmer. </p>
                <p>
                I am currently pursuing B.Tech in the field of Computer Science from National Institute of Technology Patna in the batch 2019-2023.
                I have been continuosly working on web development right from the second month of my B.Tech Study.
                Apart from that I also possess good DSA Knowledge.
                </p>
                <p>
                Throughout my study, I have acquired advanced technical knowledge and the ability to explain
                programming and development topics clearly and in detail. I invite you to take a look at my portfolio,
                where I have put a lot of effort to explain about myself, my projects,my blogs and my CV.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
