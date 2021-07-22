import AdminHomePage from '../containers/AdminHomePage';
import LoginPage from './../containers/LoginPage/index';
import ConfigSystem from './../containers/ConfigSystem/index';
import AccountManager from './../containers/AccountManager/index';
import Analytics from './../containers/AnalyticsPage/index';
import Welcom from '../containers/Welcom/index';
import AllArea from '../containers/DeviceDashboards/AllArea';
import DetailHoCa from './../containers/DeviceDashboards/DetailHoCa';
import DetailHouse from './../containers/DeviceDashboards/DetailHouse';
import DetailSolar1 from './../containers/DeviceDashboards/DetailSolar1';
import DetailSolar2 from './../containers/DeviceDashboards/DetailSolar2';
import NotPound from './../components/NotPound';
import HistoryPage from './../containers/HistoryPage';
export const API_ENDPOINT = '';

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
  ERROR: 404,
  BADREQUEST: 400,
  NO_CONTENT: 204,
};

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Home',
    exact: true,
    component: AdminHomePage,
  },
  {
    path: '/history',
    name: 'History',
    exact: false,
    component: HistoryPage,
  },
  {
    path: '/config',
    name: 'Config system',
    exact: false,
    component: ConfigSystem,
  },
  {
    path: '/account',
    name: 'Account Manager',
    exact: true,
    component: AccountManager,
  },
  {
    path: '/analytics',
    name: 'Analytics',
    exact: false,
    component: Analytics,
  },
  {
    path: '/allarea',
    name: 'All Area',
    exact: true,
    component: AllArea,
  },
  {
    path: '/housearea',
    name: 'Area House',
    exact: false,
    component: DetailHouse,
  },
  {
    path: '/hocaarea',
    name: 'Area Ho ca',
    exact: false,
    component: DetailHoCa,
  },
  {
    path: '/santhuongarea',
    name: 'Area San thuong',
    exact: false,
    component: NotPound,
  },
  {
    path: '/solar1area',
    name: 'Area Solar 1',
    exact: false,
    component: DetailSolar1,
  },
  {
    path: '/solar2area',
    name: 'Area Solar 2',
    exact: false,
    component: DetailSolar2,
  },
];

export const ROUTES = [
  {
    path: '/login',
    exact: false,
    name: 'đăng nhập',
    component: LoginPage,
  },
  {
    path: '/',
    exact: false,
    name: 'welcom',
    component: Welcom,
  },
];
