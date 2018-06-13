import { observable, action, computed, autorun } from 'mobx';

class MainStore {
    @observable currentViewName = 'list';  // 'list' / 'details'
    @observable rocketNameFilter = '';
    @observable  availableRocketNames: ['All Rockets', 'Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'];

    @observable listState = {
        rocketNameFilter: '',
        error: false,
        isLoading: false,
        launches: [] // fetched data
    }

    constructor() {
        // autorun fetching data
      autorun(() =>
          this.fetchData()
      );
        // depends on currentViewName and rocketFilter
    }
// @computed beforeFetch() {
//   return this.listState.error && !this.listState.isLoading;
// }

// @action isError() {
//   return !this.listState.error && this.listState.isLoading;
// }

@action successFetch(data) {
this.listState.launches = data.map(x => x);
const {launches} = this.listState;
// po przeniesieniu danych do obserwowanej tablicy, dane  trzeba zmapować żeby można było je użyć
}
@action switchCard(view) {
  this.currentViewName = view;
}

@action fetchData = (value = 'all') => {
    // this.setState({
    //   error: false,
    //   isLoading: true
    // });
    // this.beforeFetch();
    const endpoint = "https://api.spacexdata.com/v2";
    const rockets = "/launches?rocket_name=";
    let url = 'https://api.spacexdata.com/v2/launches/all';
    const { rocketNameFilter, launches } = this.listState;
    // !rocketNameFilter ? '' : rocketNameFilter;
    if(value !== 'all') {
      url = endpoint + rockets + `${value}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => data.length < 1 ?
      // this.isError()
      console.log('blad')
      :
      this.successFetch(data))
      .catch(error =>
      // this.isError()
      console.log('error') )}

    @action
    handleFilterChange(value) {
      let { rocketNameFilter }  = this.listState;
      rocketNameFilter = value;
      if(value == 'All Rockets') {
         value = 'all';
      }
      console.log(value);
      this.fetchData(value);
    }
}

const store = new MainStore();
export default store;