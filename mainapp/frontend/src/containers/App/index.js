import React,{Component} from 'react';
import { withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles.js';
import theme from './../../commons/theme';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import configureStore from './../../redux/configureStore';
import GlobalLoading from './../../components/Globalloading/index';
import CustomModal from './../../components/Modal/index';
import {BrowserRouter,Switch} from 'react-router-dom';
import { ADMIN_ROUTES,ROUTES } from '../../constants/index';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute/index';
import DefaultLayoutRoute from './../../commons/Layout/DefaultLayoutRoute/index';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore();

class  App extends Component {

    renderAdminRoutes(){
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map(route=>{
            return (<AdminLayoutRoute 
                    key={route.path}
                    exact={route.exact}
                    component={route.component}
                    path={route.path}
                    name={route.name}
                   />);
        });
        return xhtml;
    }
    renderDefaultRoutes(){
        let xhtml = null;
        xhtml = ROUTES.map(route=>{
            return (<DefaultLayoutRoute 
                    key={route.path}
                    exact={route.exact}
                    component={route.component}
                    path={route.path}
                    name={route.name}
                   />);
        });
        return xhtml;
    }
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline>
                            <GlobalLoading/>
                            <Switch>
                                {this.renderAdminRoutes()} 
                                {this.renderDefaultRoutes()}
                            </Switch>
                            <CustomModal />
                        </CssBaseline>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default withStyles(styles)(App);