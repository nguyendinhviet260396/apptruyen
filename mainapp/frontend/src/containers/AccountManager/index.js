import React, { Component } from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import {Box} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from './../../actions/modal';
import * as userActions from './../../actions/auths';
import {Redirect} from 'react-router-dom';
import SignupForm from './SignupForm/index';

class AccountManager extends Component {

    componentDidMount(){
        const { userActionCreators}=this.props;
        const { fetchListUser,authLogHistory } = userActionCreators;
        fetchListUser();
        authLogHistory();

    };
    showModalDeleteUser=(user)=>{
        const {modalActionCreators,classes}=this.props;
        const {hideModal,showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        showModal();
        changeModalTitle('Xóa tài khoản!');
        changeModalContent(
                        <div className={classes.modalDelete}>
                            <div className={classes.modalConfimText}>
                                Bạn chắc chắn muốn xóa {''}
                                <span className={classes.modalConfimTextBold}>{user.name}? </span>
                            </div>
                            <Box className={classes.box} mt={2}>
                                
                                <Box >
                                    <Button 
                                    variant="contained"
                                    color="primary" 
                                    style={{backgroundColor:'#00CC00'}}
                                    className={classes.button1}
                                    onClick={()=>this.handleDeleteUser(user)}>
                                        Đồng Ý
                                    </Button>
                                </Box>
                                <Box ml={1}>
                                    <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    style={{backgroundColor:'#FF0000'}}
                                    className={classes.button1}
                                    onClick={hideModal}>
                                        Hủy Bỏ
                                    </Button>   
                                </Box>
                            </Box>
                        </div>
             );
    }
    showModalDeleteUserLog=(userlog)=>{
        const {modalActionCreators,classes}=this.props;
        const {hideModal,showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        showModal();
        changeModalTitle(' Xóa lịch sử!');
        changeModalContent(
                        <div className={classes.modalDelete}>
                            <div className={classes.modalConfimText}>
                                Bạn chắc chắn muốn xóa lịch sử {''}
                                <span className={classes.modalConfimTextBold}>{userlog.name}? </span>
                            </div>
                            <Box className={classes.box} mt={2}>
                                
                                <Box >
                                    <Button 
                                    variant="contained"
                                    color="primary" 
                                    style={{backgroundColor:'#00CC00'}}
                                    className={classes.button1}
                                    onClick={()=>this.handleDeleteUserLog(userlog)}>
                                        Đồng Ý
                                    </Button>
                                </Box>
                                <Box ml={1}>
                                    <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    style={{backgroundColor:'#FF0000'}}
                                    className={classes.button1}
                                    onClick={hideModal}>
                                        Hủy Bỏ
                                    </Button>   
                                </Box>
                            </Box>
                        </div>
             );
    }
    handleDeleteUser(user){
        const {id}=user;
        const {userActionCreators}=this.props;
        const {setUserDelete} = userActionCreators;
        setUserDelete(id);
    }
    handleDeleteUserLog(userlog){
        const {id}=userlog;
        const {userActionCreators}=this.props;
        const {authLogDeleteHistory} = userActionCreators;
        authLogDeleteHistory(id);
    }
    openForm=()=>{
        const {modalActionCreators}=this.props;
        const {showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        showModal();
        changeModalTitle('Đăng kí tài khoản!');
        changeModalContent(<SignupForm/>);
    }
    showModalEditUser=(user)=>{
        const {modalActionCreators,userActionCreators}=this.props;
        const {setUserEditting} = userActionCreators;
        const {showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        setUserEditting(user);
        showModal();
        changeModalTitle('Cập nhật tài khoản!');
        changeModalContent(<SignupForm/>);
    }
    showUsersSignup() {
        const {listUsers,classes}=this.props;
        var  users  = listUsers;
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <tr key={index}>
                        <th className={classes.textTd} scope="row">{index+1}</th>
                        <td className={classes.textTd}>{user.name}</td>
                        <td className={classes.textTd}>{user.email}</td>
                        <td className={classes.textTd}>{user.operator}</td>
                        <td className={classes.textTd}>{user.modified_at}</td>
                        <td className={classes.textTd}>
                            <button 
                            type="button" 
                            className="btn btn-sm" 
                            style={{ margin:'5px',fontSize:'100%', width: '65px',backgroundColor:'#00CC00',color:'#FFF'}}  
                            onClick={() =>this.showModalEditUser(user)}>
                                Edit
                            </button>
                            <button 
                            type="button" 
                            className="btn btn-danger btn-sm " 
                            style={{fontSize:'100%', margin:'5px', width: '65px',textAlign:"center",backgroundColor:'#FF0000'}}
                            onClick={() => this.showModalDeleteUser(user)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            });
        }
        return result;
    }


    showUsersLog() {
        const {listUserLogs,classes}=this.props;
        console.log(listUserLogs)
        const userLogs = listUserLogs;
        let result = null;
        if (userLogs.length !== 0) {
            result = userLogs.map((userlog, index) => {
                return (
                    <tr key={index}>
                        <th className={classes.textTd} scope="row">{index+1}</th>
                        <td className={classes.textTd}>{userlog.name}</td>
                        <td className={classes.textTd}>{userlog.email}</td>
                        <td className={classes.textTd}>{userlog.status}</td>
                        <td className={classes.textTd}>{userlog.timestamp}</td>
                        <td className={classes.textTd}>
                            <button 
                            type="button" 
                            className="btn btn-danger btn-sm " 
                            style={{fontSize:'100%', margin:'5px', width: '65px',textAlign:"center",backgroundColor:'#FF0000'}}
                            onClick={() => this.showModalDeleteUserLog(userlog)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            });
        }
        return result;
    }

render(){
    const {classes,redirectToReferrer}= this.props;
    if (redirectToReferrer === false && localStorage.getItem("token:") === null){
        return <Redirect to="/" />
      }

    return(
            <div className="container overflow-scroll overflow-auto " style={{minWidth:'100%',marginTop: '2vh',height: '82vh', paddingTop:'40px',paddingBottom:'40px'}}>
                    <div className={classes.text}>QUẢN LÝ TÀI KHOẢN</div>
                    <div className={classes.button}>
                        <button  
                        type="button" 
                        className="btn"
                        style={{fontSize:'1rem',maxHeight:'5%',maxWidth:'30%',textAlign:'center',backgroundColor:'#00CC33',color:'#FFF'}}
                        onClick={this.openForm}>
                            Thêm tài khoản
                        </button> 
                    </div>
                    <label className="font-weight-bolder h6 w-100 mb-5 p-1" style={{height:'fit-content',maxHeight:'40vh',borderBottom: '2px solid #00CC00' }}> Danh sách tài khoản đăng kí</label>
                    <table className="table overflow-scroll table-sm overflow-auto table-responsive-sm mb-5 " style={{minWidth: '100%',fontSize:'100%',textAlign: 'center'}}>
                        <thead className="thead-dark" >
                            <tr >
                            <th scope="col">Stt</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Operator</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsersSignup()}
                        </tbody>
                    </table>
                    <label className="font-weight-bolder h6 w-100 mb-5 p-1" style={{height:'fit-content',maxHeight:'40vh',borderBottom: '2px solid #00CC00' }}>Lịch sử đăng nhập</label>
                    <table className="table overflow-scroll table-sm overflow-auto table-responsive-sm mb-5" style={{minWidth: '100%',fontSize:'100%',textAlign: 'center'}}>
                        <thead className="thead-dark" >
                            <tr >
                            <th scope="col">Stt</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsersLog()}
                        </tbody>
                    </table>
                </div>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
        ...state,
        listUsers:state.auth.listUsers,
        listUserLogs:state.auth.listUserLogs,
        redirectToReferrer:state.auth.redirectToReferrer,
    }
};

const mapDispatchToProps =(dispatch,props)=>{
    return{
        userActionCreators:bindActionCreators(userActions,dispatch),
        modalActionCreators:bindActionCreators(modalActions,dispatch)
    }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AccountManager));


