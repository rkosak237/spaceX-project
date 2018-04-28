import { hot } from 'react-hot-loader';
import * as React from 'react';
import Header from './view/Header';
import Details from './view/Details';
import Rocket from './view/Rocket';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from 'view/LaunchDetails';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
      	<Header />
        <Details />
        <Rocket />
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default hot(module)(App);
