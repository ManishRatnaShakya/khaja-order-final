import React, { Component } from 'react';

// Redux
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'; 
import { Row, Col, Input, Button, Container, Label, FormGroup,Spinner ,Alert} from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// import images
import logodark from "../../assets/images/Khajaorder.jpg";
import { makeSelectEmail,makeSelectPassword, makeSelectToken,makeSelectError } from './../../store/Login/selectors';
import { changeEmail,changePassword,submitLoginData,errorChange} from '../../store/Login/actions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
                loading:false,
                error:'',
        }
       
    }
    
    componentDidMount()
    {
      document.body.classList.add("auth-body-bg");
      console.log("from login err",this.props.error)

    }

    componentWillUnmount(){
        document.body.classList.remove("auth-body-bg");
        // this.props.error && this.setState({error:this.props.error });
       
    }

    onSubmitLogin(){
        this.setState({loading:true})
        this.props.onSubmit();
    }
    loadingComponentDisable(){
            this.props.onErrorChange()
            return <Alert color="warning">
             {this.props.error}
            </Alert>
    }
    render() {
         
            if (this.props.authenticated) return <Redirect to="/dashboard" />;
        return (
            <React.Fragment>
                              <div className="home-btn d-none d-sm-block">
                    <Link to="/"><i className="mdi mdi-home-variant h2 text-white"></i></Link>
                </div>
                
                <div>
            <Container fluid className="p-0">
                <Row className="no-gutters">
                    <Col lg={4}>
                        <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                            <div className="w-100">
                                <Row className="justify-content-center">
                                    <Col lg={9}>
                                        <div>
                                            <div className="text-center">
                                                <div>
                                                    <Link to="/" className="logo"><img src={logodark} height="100" alt="logo"/></Link>
                                                </div>
    
                                                <h4 className="font-size-18 mt-4">Welcome Back !</h4>
                                                <p className="text-muted">Sign in to continue to Khaja Order Admin.</p>
                                            </div>

                                            <div>{this.props.error && this.loadingComponentDisable() }</div>
                                            <div className="p-2 mt-5">
                                                <AvForm className="form-horizontal" >
                    
                                                    <FormGroup className="auth-form-group-custom mb-4">
                                                        <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input name="email" type="text" className="form-control" id="email" validate={{email: true, required: true}} value={this.props.email} onChange={this.props.onChangeEmail} placeholder="Enter email"/>
                                                    </FormGroup>
                            
                                                    <FormGroup className="auth-form-group-custom mb-4">
                                                        <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                        <Label htmlFor="userpassword">Password</Label>
                                                        <AvField name="password" type="password" className="form-control" id="userpassword" value={this.props.password} onChange ={this.props.onChangePassword} placeholder="Enter password"/>
                                                    </FormGroup>
                            
                                                    <div className="custom-control custom-checkbox">
                                                        <Input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                                        <Label className="custom-control-label" htmlFor="customControlInline">Remember me</Label>
                                                    </div>

                                                    <div className="mt-4 text-center">
                                                      {(this.state.loading )?  <Spinner style={{ width: '2rem', height: '2rem' }} />:<Button color="primary" className="w-md waves-effect waves-light" type="submit" onClick={()=>this.onSubmitLogin()}>Log In</Button>}
                                                    </div>

                                                    <div className="mt-4 text-center">
                                                        <Link to="/auth-recoverpw" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
                                                    </div>
                                                </AvForm>
                                            </div>

                                            <div className="mt-5 text-center">
                                                <p>Don't have an account ? <Link to="/auth-register" className="font-weight-medium text-primary"> Register </Link> </p>
                                                {/* <p>?? 2020 Nazox. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p> */}
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="authentication-bg">
                            <div className="bg-overlay"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps =createStructuredSelector({
    email: makeSelectEmail(),
    password:makeSelectPassword(),
    authenticated:makeSelectToken(),
    error:makeSelectError(),

})
const mapDispatchToProps =(dispatch)=>{ 
    return {
        onChangeEmail:e=>dispatch(changeEmail(e.target.value)),
        onChangePassword:e=>dispatch(changePassword(e.target.value)),
        onSubmit:()=>dispatch(submitLoginData()),
        onErrorChange:()=>dispatch(errorChange('')),
    }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);


