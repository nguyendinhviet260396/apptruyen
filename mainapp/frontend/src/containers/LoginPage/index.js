import React, { Component } from 'react';
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import enegry from './../../assets/images/enegry.jpg';
import renderTextField from './../../components/FormHelper/TextField/index';
import validate from './../../commons/Validation/index';
import * as authActions from './../../actions/auths';
import styles from './styles';

class LoginPage extends Component {
  handleCloseForm = () => {
    const { authActionCreators } = this.props;
    const { checkAuthFaild } = authActionCreators;
    checkAuthFaild();
    const { history } = this.props;
    history.push('/');
  };

  handleSubmitForm = data => {
    const { email, password } = data;
    const { authActionCreators } = this.props;
    const { authLogin } = authActionCreators;
    authLogin(email, password);
  };
  render() {
    const {
      classes,
      handleSubmit,
      invalid,
      infAuth,
      redirectToReferrer,
      submitting,
    } = this.props;
    if (
      redirectToReferrer === true ||
      localStorage.getItem('token:') !== null
    ) {
      return <Redirect to={'/admin'} />;
    }
    return (
      <Grid
        container
        spacing={0}
        className={classes.background}
        style={{
          backgroundImage: `url(${enegry})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={classes.signup}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className={classes.label}>
                  <Typography variant="caption" className={classes.typography}>
                    Đăng nhập
                  </Typography>
                  <br />
                  <div
                    style={{
                      fontSize: '10px',
                      color: '#FF0000',
                      fontStyle: 'italic',
                    }}
                  >
                    {infAuth}
                  </div>
                </div>
                <Field
                  id="email"
                  label="Email"
                  name="email"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 12 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 12 } }} // font size of input label
                  type="text"
                  fullWidth
                  margin="normal"
                  component={renderTextField}
                />
                <Field
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 12 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 12 } }} // font size of input label
                  fullWidth
                  margin="normal"
                  component={renderTextField}
                />
                <Button
                  className={classes.button}
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: `${
                      invalid === false ? '#00CC00' : '#9C9C9C'
                    }`,
                    fontSize: '0.7rem',
                    color: '#fff',
                  }}
                  size="small"
                  disabled={submitting || invalid}
                >
                  đăng nhập
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  style={{
                    backgroundColor: '#ff0000',
                    fontSize: '0.7rem',
                    color: '#fff',
                  }}
                  type="submit"
                  size="small"
                  onClick={this.handleCloseForm}
                >
                  hủy bỏ
                </Button>
              </form>
              <div>
                <Link to="/">
                  <Button
                    size="small"
                    style={{ fontSize: '0.7rem', color: '#111' }}
                  >
                    hướng dẫn đăng nhập !
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            color: '#fff',
            fontSize: '1vw',
            fontWeight: '500',
            paddingBottom: '2%',
          }}
        >
          Địa chỉ: Số 18 Phố Viên - Phường Đức Thắng - Q. Bắc Từ Liêm - Hà Nội
          Điện thoại: (+84-24) 3838 9633 | Email: hanhchinhtonghop@humg.edu.vn
        </div>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  redirectToReferrer: PropTypes.bool,
  authActionCreators: PropTypes.shape({
    onButtonSubmit: PropTypes.func,
    authLogin: PropTypes.func,
    offButtonSubmit: PropTypes.func,
  }),
};

const FORM_USER_LOGIN = 'TASK_USER_LOGIN';
const withReduxForm = reduxForm({
  form: FORM_USER_LOGIN,
  validate: validate,
});
const mapStateToProps = state => {
  return {
    redirectToReferrer: state.auth.redirectToReferrer,
    infAuth: state.auth.infAuth,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    authActionCreators: bindActionCreators(authActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(LoginPage);
