import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Web Developer','React.js', 'Angular','Node.js','MongoDB','MYSQL', 'Tech Lover', 'Team Player', 'Buisness Enthusiast','and many more....' ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 60000);
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth}
                  headerType="index"
                  title="Pawananjani Kumar - Portfolio">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my journey through my portfolio.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/PhotoSQ.jpeg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Collaborate with me on Web Projects </h2>
                        <div className="hero-section-content-intro">
                          Profesional and top quality service in web development.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/F1.jpeg"/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                   
                    <br/>Hello  { isAuthenticated && <span> <b> {user.name} </b> </span> } and...<br/>Welcome to the portfolio website of<span> <b> PAWANANJANI KUMAR </b> </span>.
                    Get informed, collaborate and discover projects I have been working on throughout my B.Tech study!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />


                <div className="hero-welcome-bio">
                  <h2>
                    Let's take a look on my work.
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="service-link">Vector illustration credit:{' '}
            <a href="https://www.Vecteezy.com/">vecteezy.com</a>
          </span>
        </div>
      </BaseLayout>
    )
  }
}



export default Index;

