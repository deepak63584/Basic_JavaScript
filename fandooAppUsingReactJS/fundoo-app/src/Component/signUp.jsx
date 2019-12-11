import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/signUpPage.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import sighUpLogo from './image/account.svg';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import firebase from '../firebase';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            emailid: '',
            passworditem: '',
            confirmpass: '',
            showpassword: 'false',
            errors: {},
        };
        this.writeUserData = this.writeUserData.bind(this);

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeShowPassword = () => {
        this.setState({
            showpassword: !this.state.showpassword
        })
    }

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    validateForm = () => {

        let errors = {};
        var formIsValid = true;

        if (!this.state.firstname) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your First Name.";
        }

        if (!this.state.lastname) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your Last Name.";
        }

        if (!this.state.emailid) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof this.state.emailid !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.emailid)) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!this.state.passworditem) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof this.state.passworditem !== "undefined") {
            if (!this.state.passworditem.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!this.state.confirmpass) {
            formIsValid = false;
            errors["confirmpassword"] = "*Please confirm your password.";
        }

        if (typeof this.state.confirmpass !== "undefined") {
            if (this.state.confirmpass !== this.state.passworditem) {
                formIsValid = false;
                errors["confirmpassword"] = "*Password does not match.";
            }
        }

        this.setState({
            errors: errors
        });
        console.log("hfskjidghfdosigfhdfj");

        return formIsValid;
    }

    RegistrationForm = (event) => {
        console.log('resi1');

        event.preventDefault();
        if (this.validateForm()) {
            this.setState({
                [event.target.name]: event.target.value,
                [event.target.formvalid]: !event.target.formvalid
            })
            //alert("You have Login Successfully !");
            console.log('caling user data');

            this.writeUserData();
        }
    }

    writeUserData() {
        console.log("writedata1");

        firebase.auth().createUserWithEmailAndPassword(this.state.emailid, this.state.passworditem).then(() => {
            firebase.database().ref('users/').push({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                emailid: this.state.emailid,
                passworditem: this.state.passworditem
            })
            this.props.history.push('/');
            console.log("writedata2");

        })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('Error code : ' + errorCode);
                console.log('Error Msg : ' + errorMessage);
                // ...
            });
    }


    render() {
        return (

            <div className="signupfullView">
                <div className="signupInitialview">
                    <Container maxWidth="lg">
                        <div className="headerview">
                            <form style={{ color: '#4285F4' }}>F</form>
                            <form style={{ color: '#DB4437' }}>u</form>
                            <form style={{ color: '#F4B400' }}>n</form>
                            <form style={{ color: '#4285F4' }}>d</form>
                            <form style={{ color: '#0F9D58' }}>o</form>
                            <form style={{ color: '#DB4437' }}>o</form>
                        </div>
                        <div className="headerviewAccount">
                            <form>Create Your Fundoo Account</form>
                        </div>
                        <div className="textimageview">
                            <div className="textview">
                                <div className="fname">
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 8 }}
                                        label="FirstName"
                                        variant="outlined"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        name="firstname"
                                        error={this.state.errors.firstname}
                                        helperText={this.state.errors.firstname} />
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 8 }}
                                        label="LastName"
                                        variant="outlined"
                                        value={this.state.lastname}
                                        onChange={this.handleChange}
                                        name="lastname"
                                        error={this.state.errors.lastname}
                                        helperText={this.state.errors.lastname}
                                    />
                                </div>
                                <div>
                                    <p>  </p>
                                </div>

                                <div className="email">
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 8 }}
                                        label="Username"
                                        variant="outlined"
                                        value={this.state.emailid}
                                        onChange={this.handleChange}
                                        name="emailid"
                                        error={this.state.errors.emailid}
                                        helperText={this.state.errors.emailid} />
                                    <div className="emailPara">
                                        <p margin="dense">You can use letters,numbers & periods</p>
                                    </div>
                                </div>

                                <div className="password">
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 6 }}
                                        label="Password"
                                        variant="outlined"
                                        value={this.state.passworditem}
                                        onChange={this.handleChange}
                                        name="passworditem"
                                        type={!this.state.showpassword ? "text" : "password"}
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password} />
                                    <TextField id="outlined-basic"
                                        margin="dense"
                                        style={{ margin: 6 }}
                                        label="Confirm"
                                        variant="outlined"
                                        value={this.state.confirmpass}
                                        onChange={this.handleChange}
                                        name="confirmpass"
                                        type={!this.state.showpassword ? "text" : "password"}
                                        error={this.state.errors.confirmpassword}
                                        helperText={this.state.errors.confirmpassword} />
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleChangeShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}>
                                        {this.state.showpassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </div>
                                <div className="passwordpara">
                                    <p margin="dense"> Use 8 or more characters with a mix of letters, numbers & symbols</p>
                                </div>

                                <div className="buttonlink">
                                    <Button
                                        margin="dense"
                                        onClick={() => {
                                            this.props.history.push('/')
                                        }}
                                    >Sign in instead
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="contained"

                                        onClick={this.RegistrationForm}>
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <p></p>
                    </Container>
                    <div className="imageview">
                        <Container className="image">
                            <img src={sighUpLogo}
                                fullWidth={true} />
                            <div>
                                <p style={{ textAlign: 'center' }}>
                                    One account. All of Google working for you.
                                </p>
                            </div>
                        </Container>
                    </div>
                </div >
            </div >
        );
    }
}
export default Signup;