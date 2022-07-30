import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import env from 'react-dotenv';
import { gapi } from 'gapi-script';
export default function LogInForm(props) {

    React.useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'email',
                cookiePolicy: 'single_host_origin',
                prompt: 'select_account'
            });
        }

        gapi.load('client:auth2', start);
    }, []);
    // window.gapi.load('client:auth2', () => {
    //     window.gapi.client.init({
    //         clientId: '1032179057074-uob22fqalf8labch6q1na2mkubp08j9d.apps.googleusercontent.com',
    //         plugin_name: "chat"
    //     })
    // };

    const [Username, setshowUsername] = useState('');
    const [password, setsPassword] = useState('');

    const handleUsername = (event) => setshowUsername(event.target.value);
    const handlePassword = (event) => setsPassword(event.target.value);


    function signInUser(event) {
        event.preventDefault();
        const signInData = {
            username: Username,
            password: password
        };
        axios
            .post("/signIn", signInData)
            .then((response) => {
                console.log(response);
                console.log(props.setIsLogIn, response.data.data.username);
                props.setIsLogIn(true, response.data.data.username, response.data.data.sessionCookieMaxAge);
                props.closeModal();
            })
            .catch((error) => {
                console.log("server responded");
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    };

    const handleFailureGoogle = (result) => {
        console.log(result);
    };

    const handleLoginGoogle = (googleData) => {
        console.log(googleData);
        props.setIsLogIn(true, googleData.profileObj.name, 0);
        props.closeModal();

    };

    const responseFacebook = (response) => {
        console.log(response);
    };


    return (
        <div class="container">
            <h6 style={{ "textAlign": "center" }}>Sign in by Facebook or Google</h6>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login with Google"
                            onSuccess={handleLoginGoogle}
                            onFailure={handleFailureGoogle}
                            cookiePolicy={'single_host_origin'}
                            prompt="select_account"
                            className="loginBtn loginBtn--google same-as-fb" 
                        ></GoogleLogin>
                    </div>
                    <div class="col-6">
                        <FacebookLogin 
                            appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                            // autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="loginBtn loginBtn--facebook"
                            // icon={<TiSocialFacebookCircular />}
                        ></FacebookLogin>
                    </div>
                </div>
            </div>
            <br />
            <h6 style={{ "textAlign": "center" }}>Or sign in with your Tsioui Account</h6>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={12}>
                                    Username:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Username" value={Username} name="Username" onChange={handleUsername} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" >
                                <Form.Label column sm={12}>
                                    Password:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={handlePassword} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit" onClick={signInUser}>Sign In</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
