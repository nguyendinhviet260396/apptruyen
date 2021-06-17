import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {connect} from 'react-redux';
import {compose,bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import logo from './../../../assets/images/ems_logo.png';
//import {Link} from 'react-router-dom';
//import IconDashboard from '@material-ui/icons/Dashboard';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import ErrorIcon from '@material-ui/icons/Error';
//import DirectionsIcon from '@material-ui/icons/Directions';
import * as authActions from './../../../actions/auths';
import './header.css';


const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

class Header extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            mobileMoreAnchorEl:null,
            anchorEl:null,
            number:Math.floor((Math.random() * 10) + 1),
        }
    }
    handleProfileMenuOpen=(e)=>{
        this.setState({
            mobileMoreAnchorEl:e.currentTarget,
        });    
    }
    handleMobileMenuOpen=(e)=>{
        console.log('handleMobileMenuOpen');
        this.setState({
            anchorEl:e.currentTarget,
        }); 
    }
    handleMobileMenuClose=()=>{
        console.log('handleMobileMenuClose');
        this.setState({
            mobileMoreAnchorEl:null,
        }); 
    }
    handleMenuClose=(e)=>{
        console.log('handleMenuClose');
        this.setState({
            anchorEl:null,
        }); 
    }
    handleLogout=()=>{
        const {authActionCreators}=this.props;
        const {authLogout}=authActionCreators;
        authLogout(); 
    }
    renderMobileMenu =()=> {
        const {mobileMoreAnchorEl}=this.state;
        const isMobileMenuOpen=Boolean(mobileMoreAnchorEl);
        return(
            <Menu
                anchorEl={mobileMoreAnchorEl}
                style={{ zIndex:10000}}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
                >
                <MenuItem onClick={this.handleLogout} style={{fontSize:'1em'}} >
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                    Đăng xuất
                </MenuItem>
            </Menu>
        );
    };
    
    render() {
        let {number} =this.state;
        const {classes}=this.props;
        return (
            <nav className="navbar navbar-expand-sm navbar-light p-1" style={{ height: '50px',backgroundColor:'#273136'}}>
                <a className="navbar-brand "  href='/admin'>
                    <img src={logo} alt='EmsLogo'style={{ width: '45px'}}/>
                    </a>
                <button className="navbar-toggler d-lg-none " type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="collapsibleNavId" style={{backgroundColor:'#273136',zIndex: '1',height:'50px'}}>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active " style={{marginRight: '10px',marginLeft: '10px'}}>
                            <a 
                            className={classes.link }  
                            style={{ textDecoration:'none'}} 
                            href='/admin'>
                                <HomeRoundedIcon className={classes.icon}/>
                                Trang chủ
                                <span className="sr-only">
                                    (current)
                                </span>
                            </a>
                        </li>
                        {/* <li className="nav-item dropdown" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <a 
                            className={classes.link}  
                            style={{ textDecoration:'none',marginRight: '5px'}}        
                            href="/allarea">
                                <IconDashboard className={classes.icon} />
                                Giao diện
                            </a>
                            <a 
                            className="dropdown-toggle custom " 
                            href='/admin'
                            style={{ textDecoration:'none',fontSize:'100%',maxHeight: '20px'}}  
                            id="dropdownId" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId" style={{backgroundColor:'#262f43',fontSize: 'small'}}>
                                <a   className='dropdown-item p-0 ' href='/housearea'>  <DirectionsIcon className={classes.icon} />Toàn nhà</a>
                                <a   className='dropdown-item p-0 '  href='/hocaarea'> <DirectionsIcon className={classes.icon} />Hồ cá</a>
                                <a   className='dropdown-item p-0 '  href='/santhuongarea'> <DirectionsIcon className={classes.icon} />Sân thượng</a>
                                <a   className='dropdown-item p-0 '  href='/solar1area'> <DirectionsIcon className={classes.icon} />Solar I</a>
                                <a   className='dropdown-item p-0 '  href='/solar2area'> <DirectionsIcon className={classes.icon} />Solar II</a>
                            </div>
                        </li> */}
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <a 
                            className={classes.link}  
                            style={{ textDecoration:'none'}}        
                            href='/analytics'>
                                <IconBarChart className={classes.icon}/>
                                Phân tích
                            </a>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <a 
                            className={classes.link}  
                            style={{ textDecoration:'none'}}  
                            href='/alarm'>
                                 <ErrorIcon className={classes.icon}/>
                                Cảnh báo
                            </a>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <a 
                            className={classes.link}  
                            style={{ textDecoration:'none'}}  
                            href='/config'>
                                 <SettingsIcon className={classes.icon}/>
                                Cài đặt 
                            </a>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <a 
                            className={classes.link}  
                            style={{ textDecoration:'none'}} 
                            href='/account'>
                                 <IconPeople className={classes.icon}/>
                                Tài khoản
                            </a>
                        </li>
                    </ul>
                    <div className={classes.sectionDesktop}>
                            <IconButton aria-label=" new notifications" style={{color:'#F8F8FF'}}>
                                    <a href='/alarm' style={{ color: '#fff'}}>
                                        <Badge badgeContent={number} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </a>
                            </IconButton>
                            <IconButton
                                edge="end"
                                style={{color:'#F8F8FF',marginRight: '0px'}}
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    {this.renderMobileMenu()}
                </div>
            </nav>
        );
    }
}

Header.propTypes={
    mobileMoreAnchorEl:PropTypes.bool,
    anchorEl:PropTypes.bool,
    name:PropTypes.string,
    classes:PropTypes.object,
    redirectToReferrer:PropTypes.bool,
    authActionCreators:PropTypes.shape({
        authLogout:PropTypes.func,
    }),
}
const mapStateToProps=(state) =>{
    return {
        ...state,
        redirectToReferrer:state.auth.redirectToReferrer,

    };
}

const mapDispatchToProps=(dispatch) =>{
    return {
        authActionCreators:bindActionCreators(authActions,dispatch),
    };
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
)(
Header);
