import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/logInPage.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class SignIn extends Component {
    render() {
        return (
            <div className="fullView">
                <div className="initialView">
                    <Container maxWidth="sm">
                        <div className="containerView">
                            <div className="tilteView">
                                <text>Fundoo</text>
                            </div>
                            <div className="subtilteView">
                                <text>Sign in</text>
                            </div>
                            <div className="account">
                                <text>Use your Fundoo Account</text>
                            </div>
                            <div className="emailId">
                                <TextField id="outlined-basic" margin="dense" label="Enter email" variant="outlined" />
                            </div>
                            <div className="passWord">
                                <TextField id="outlined-basic" margin="dense" label="Enter password" variant="outlined" fullWidth={true} />
                            </div>
                            <div className="forgatePassword">
                                <text>forgot password?</text>
                            </div>
                            <div className="buttonlink">
                                <Button margin="dense" href>create account</Button>
                                <div classname="nectReference">
                                    <Button margin="dense" variant="contained">Next</Button>
                                </div>
                            </div><p></p>
                        </div>

                    </Container>

                </div>

            </div>

        );
    }
}
export default SignIn;