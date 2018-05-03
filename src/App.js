import { hot } from 'react-hot-loader';
import * as React from 'react';
import Header from './components/Header';
import LaunchDetails from './LaunchDetails';
// import Details from './components/Details.js';
// import Rocket from './components/Rocket';
// import LaunchPad from './components/LaunchPad.js';
import Content from './components/Content';
import Footer from './components/Footer';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header />
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
        <Content />
        <Footer />
      </main>
    );
  }
}

export default hot(module)(App);
