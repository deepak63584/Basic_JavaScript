import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import '../Css Files/logInPage.css';


class UserProfile extends Component {
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
                                <text>Find your email</text>
                            </div>
                            <div className="account">
                                <text>Enter your phone number or recovery email</text>
                            </div>
                            <div className="emailId">
                                <TextField
                                    id="outlined-basic"
                                    margin="dense"
                                    label="Enter Email"
                                    variant="outlined"
                                    // value={this.state.emailid}
                                    // onChange={this.handleChange}
                                    name="emailid"
                                    // error={this.state.errors.emailid}
                                    // helperText={this.state.errors.emailid}
                                    fullWidth={true}
                                />
                            </div>
                            <div classname="nextRef" >
                                <Button
                                    margin="dense"
                                    variant="contained"
                                    color="primary"
                                // onClick={this.submitForm}
                                >
                                    Next
                                </Button>
                                <p></p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
export default UserProfile;