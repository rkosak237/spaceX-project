import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from 'view/LaunchDetails';
import LaunchesList from 'view/LaunchesList';
import Content from './components/Content';
import Footer from './components/Footer';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';

import './styles/theme.sass';

import MainStore from './store/MainStore';
import { observable, action, computed } from 'mobx';
import {inject, observer, Provider} from 'mobx-react';

@observer
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  get activeViewComponent() {

    switch (MainStore.currentViewName) {
      case 'list':
        return (
          <div className="details__theme">
            <LaunchesList
              onLaunchClick={this.handleLaunchClick}
             />
            </div>
        );

      case 'details':
        return (
            <div>
              <LaunchDetails
                launch={launch}
                launchSite={launchSite}
                rocket={rocket}
                onBackClick={this.handleBackClick}
              />
              <Content
                links={launch}
              />
            </div>
        );

      default: return null;
    }
  }

  @action handleLaunchClick = (view) => {
    MainStore.switchCard('details');
    // this.setState({ viewName: 'details' });
  }

  @action handleBackClick = () => {
    // this.setState({ viewName: 'list' });
    MainStore.switchCard('list');
  }

  render() {
    return (
      <main>
        <Provider MainStore={MainStore}>
          {this.activeViewComponent}
        </Provider>
        <Footer />
      </main>
    );
  }
}

export default hot(module)(App);
