import { observable, action, computed, autorun } from 'mobx';

class MainStore {
    @observable currentViewName = 'list';  // 'list' / 'details'
    @observable rocketNameFilter = '';
    @observable  availableRocketNames = ['All Rockets', 'Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'];

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
@action beforeFetch(loading, error) {
   this.listState.isLoading = !loading;
   this.listState.error = error;
}

@action isError(loading, error) {
  this.listState.isLoading = loading;
  this.listState.isLoading = false;
  this.listState.error = true;
}

@action successFetch(data, loading, error) {
this.listState.launches = data.map(x => x);
const {launches} = this.listState;
this.listState.isLoading = false;
  this.listState.error = false;

}

@action switchCard(view) {
  this.currentViewName = view;
}

@action fetchRocketDetails = (value = 'all') => {
    const  {isLoading, error} = this.listState;
    this.beforeFetch(isLoading, error);
    const endpoint = "https://api.spacexdata.com/v2";
    const rockets = "/launches?rocket_name=";
    let url = 'https://api.spacexdata.com/v2/launches/all';
    const { rocketNameFilter, launches } = this.listState;
    !rocketNameFilter ? '' : rocketNameFilter;
    if(value !== 'all') {
      url = endpoint + rockets + `${value}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => data.length < 1 ?
      this.isError(isLoading, error)
      :
      this.successFetch(data, isLoading, error))
      .catch(error =>
      this.isError(isLoading, error)
      )}

@action fetchData = (value = 'all') => {
    const  {isLoading, error} = this.listState;
    this.beforeFetch(isLoading, error);
    const endpoint = "https://api.spacexdata.com/v2";
    const rockets = "/launches?rocket_name=";
    let url = 'https://api.spacexdata.com/v2/launches/all';
    const { rocketNameFilter, launches } = this.listState;
    !rocketNameFilter ? '' : rocketNameFilter;
    if(value !== 'all') {
      url = endpoint + rockets + `${value}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => data.length < 1 ?
      this.isError(isLoading, error)
      :
      this.successFetch(data, isLoading, error))
      .catch(error =>
      this.isError(isLoading, error)
      )}
}

const store = new MainStore();
export default store;