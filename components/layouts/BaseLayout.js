import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Pawananjani Kumar Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Pawananjani Kumar and I am a full-stack web-developer and competitive programmer. I am currently pursuing B.Tech in the field of Computer Science from National Institute of Technology Patna in the batch 2019-2023.
                I have been continuosly working on web development right from the second month of my B.Tech Study.
                Apart from that I also possess good DSA Knowledge." />
        <meta name="keywords" content="pawananjani portfolio, pawananjani developer, pawananjani freelancig, pawananjani programming"/>
        <meta property="og:title" content="Pawananjani Kumar - programmer, developer, blogger" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Pawananjani Kumar and I am a full-stack web-developer and competitive programmer."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/myfavicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

