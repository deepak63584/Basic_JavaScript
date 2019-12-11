import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/logInPage.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import firebase from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: '',
            password: '',
            showpassword: 'false',
            errors: {},
        };
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.emailid, this.state.password).then(() => {
            this.props.history.push('/dashboard');
        })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('Error code : ' + errorCode);
                console.log('Error Msg : ' + errorMessage);
            });
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

        if (!this.state.emailid) {
            formIsValid = false;
            errors["emailid"] = "Please enter your email-ID.";
        }

        if (typeof this.state.emailid !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.emailid)) {
                formIsValid = false;
                errors["emailid"] = "Please enter valid emailID.";
            }
        }

        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }
    submitForm(event) {
        event.preventDefault();
        if (this.validateForm()) {
            this.setState({
                [event.target.name]: event.target.value,
                [event.target.formvalid]: !event.target.formvalid
            })
            this.login();
        }
    }

    render() {
        return (
            <div className="fullView">
                <div className="initialView">
                    <Container maxWidth="sm">
                        <div className="containerView">
                            <div className="tilteView">
                                <form style={{ color: '#4285F4' }}>F</form>
                                <form style={{ color: '#DB4437' }}>u</form>
                                <form style={{ color: '#F4B400' }}>n</form>
                                <form style={{ color: '#4285F4' }}>d</form>
                                <form style={{ color: '#0F9D58' }}>o</form>
                                <form style={{ color: '#DB4437' }}>o</form>
                            </div>
                            <div className="subtilteView">
                                <text>Sign in</text>
                            </div>
                            <div className="account">
                                <text>Use your Fundoo Account</text>
                            </div>
                            <div className="emailId">
                                <TextField
                                    id="outlined-basic"
                                    margin="dense"
                                    label="Enter email"
                                    variant="outlined"
                                    value={this.state.emailid}
                                    onChange={this.handleChange}
                                    name="emailid"
                                    error={this.state.errors.emailid}
                                    helperText={this.state.errors.emailid}
                                    fullWidth={true}
                                />
                            </div>
                            <div className="passWord">
                                <FormControl variant="outlined"
                                    fullWidth error={this.state.errors.password}>
                                    <InputLabel>Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-basic"
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        type={!this.state.showpassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleChange}
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleChangeShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                    edge="end">
                                                    {this.state.showpassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>}
                                    />
                                    <FormHelperText error>{this.state.errors.password}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className="forgatePassword">
                                <Button
                                    onClick={() => {
                                        this.props.history.push('/forgatepassword')
                                    }}>
                                    forgot password?
                                </Button>
                            </div>
                            <div className="buttonlink">
                                <div>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            this.props.history.push('/signup')
                                        }}>
                                        create account
                                    </Button>
                                </div>
                                <div classname="nextReference">
                                    <Button
                                        margin="dense"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        onClick={this.submitForm}>
                                        Next
                                    </Button>
                                </div>
                            </div><p></p>
                        </div>

                    </Container>
                </div>
                );
            </div>
        );
    }
}
export default SignIn;