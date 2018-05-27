import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from 'view/LaunchDetails';
import LaunchesList from 'view/LaunchesList';
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
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <main className="details__theme">
            <LaunchesList
              onLaunchClick={this.handleLaunchClick}
             />
              <Footer />
            </main>
        );

      case 'details':
        return (
            <main>
              <LaunchDetails
                launch={launch}
                launchSite={launchSite}
                rocket={rocket}
                onBackClick={this.handleBackClick}
              />
              <Content 
              	links={launch}
              />
              <Footer />
            </main>
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
    console.log('works');
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return (
      <main>
        {this.activeViewComponent}
      </main>
    );
  }
}

export default hot(module)(App);
