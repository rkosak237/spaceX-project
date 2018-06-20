import { observable, action, computed, autorun } from 'mobx';

class MainStore {
    @observable currentViewName = 'list';  // 'list' / 'details'
    @observable rocketNameFilter = '';
    @observable  availableRocketNames = ['All Rockets', 'Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'];

    @observable launch = null;

    @observable listState = {
        rocketNameFilter: '',
        error: false,
        isLoading: false,
        launches: [] // fetched data
    }
    @observable rocketData = {
      isLoading: true,
      isFailed: false,
      rocketsObj: []
      // rocketId: null
    }
    @observable siteData = {
      isLoading: true,
      isFailed: false,
      launchSiteData: null
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
  this.listState.isLoading = false;
  this.listState.error = true;
}

 @computed
    get isRocketAvailable() {
        return !this.rocketData.isLoading && !this.rocketData.isFailed;
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

@action loadLaunchSite(data) {
  this.siteData.launchSiteData = data;
  console.log( this.siteData.launchSiteData);
  this.siteData.isLoading = false;
  this.siteData.isFailed = false;
}

@action loadRocketData(data) {
  this.rocketData.rocketsObj = data;
  this.rocketData.isLoading = false;
  this.rocketData.isFailed = false;
}
 @action openedDetails(e) {
    this.switchCard('details');
    this.launch = e;
    if(this.launch.length !=='0') {
    this.fetchRocketDetails();
    this.fetchSiteData();
    }
 }


@action fetchRocketDetails = () => {

const  {isLoading, error} = this.rocketData;
   this.rocketData.isLoading = true;
  this.rocketData.isFailed = false;
    const endpoint = "https://api.spacexdata.com/v2/rockets/";
    let url = ''
    url = endpoint + `${this.launch.rocketId}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => data.length < 1 ?
      this.rocketData.isFailed =  true
      :
      this.loadRocketData(data))
      .catch(error =>
      this.rocketData.isFailed =  true
      )
}

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



@action fetchSiteData = () => {
const  {isLoading, error} = this.siteData;
   this.siteData.isLoading = true;
  this.siteData.isFailed = false;
    const endpoint = "https://api.spacexdata.com/v2/launchpads/";
    let url = ''
    url = endpoint + `${this.launch.site_id}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data =>
      this.loadLaunchSite(data))
}
}
const store = new MainStore();
export default store;