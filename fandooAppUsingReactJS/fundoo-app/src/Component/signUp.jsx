import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/signUpPage.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import sighUpLogo from './image/account.svg'

class Signup extends Component {
    render() {
        return (
            <div className="signupfullView">
                <div className="signupInitialview">
                    <Container maxWidth="lg">
                        <div className="headerview">
                            <form>F</form>
                            <form>u</form>
                            <form>n</form>
                            <form>d</form>
                            <form>o</form>
                            <form>o</form>
                        </div>
                        <div className="headerviewAccount">
                            <form>Create Your Fundoo Account</form>
                        </div>
                        <div className="textimageview">
                            <div className="textview">
                                <div className="fname">
                                    <TextField id="outlined-basic" margin="dense" style={{ margin: 8 }} label="FirstName" variant="outlined" />
                                    <TextField id="outlined-basic" margin="dense" style={{ margin: 8 }} label="LastName" variant="outlined" />
                                </div>
                                <div>
                                    <p>  </p>
                                </div>

                                <div className="email">
                                    <TextField id="outlined-basic" margin="dense" style={{ margin: 8 }} label="Username" variant="outlined" />
                                    <div className="emailPara">
                                        <p margin="dense">You can use letters,numbers & periods</p>
                                    </div>
                                </div>

                                <div className="password">
                                    <TextField id="outlined-basic" margin="dense" style={{ margin: 8 }} label="Password" variant="outlined" />
                                    <TextField id="outlined-basic" margin="dense" style={{ margin: 8 }} label="Confirm Password" variant="outlined" />
                                </div>
                                <div className="passwordpara">
                                    <p margin="dense"> Use 8 or more charector</p>
                                </div>

                                <div className="buttonlink">
                                    <Button margin="dense" href>Sign in instead</Button>
                                    {/* <Button variant="contained">Sign in instead</Button> */}
                                    <Button margin="dense" variant="contained">Next</Button>
                                </div>
                            </div>
                            <div className="imageview">
                                <div className="imageContainer">
                                    <Container className="image">
                                        <img src={sighUpLogo} />
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <p></p>

                    </Container>
                    {/* <div classname="footer">
                        <text>help</text>
                        <text>privacy</text>
                        <text>term</text>
                    </div> */}
                </div >
            </div >
        );
    }
}
export default Signup;