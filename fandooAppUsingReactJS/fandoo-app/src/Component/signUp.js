import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/signUpPage.css'
import Button from '@material-ui/core/Button';
//import './App.css';
class Signup extends Component {
    render() {
        return (
            <div className="signupfullView">
                <div className="signupInitialview">
                    <form>Fondoo</form>
                    <form>Create Your Fondoo Account</form>
                </div>
                <div className="textimageview">
                    <div className="textview">
                        <div className="fname">
                            <TextField id="outlined-basic" label="FirstName" variant="outlined" />
                        </div>
                        <div className="lname">
                            <TextField id="outlined-basic" label="LastName" variant="outlined" />
                        </div>
                        <div className="email">
                            <TextField id="outlined-basic" label="Username" variant="outlined" />
                            <div className="emailPara">
                                <p>You can use letters,numbers & special charecter</p>
                            </div>
                        </div>
                        <div className="password">
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                        </div>
                        <div className="cpassword">
                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                        </div>
                        <div className="passwordpara">
                            <p>Use 8 or more charector</p>
                        </div>
                        <div className="buttonlink1">
                            <Button variant="contained">Next</Button>
                        </div>
                        <div className="buttonlink2">
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>

                    <div className="imageview">

                    </div>
                </div>
                <div classname="footer">

                </div>
            </div >
        );
    }
}
export default Signup;