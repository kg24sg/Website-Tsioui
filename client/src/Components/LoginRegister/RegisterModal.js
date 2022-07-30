import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { RestorePageOutlined } from '@mui/icons-material';
import FormErrors from '../globalFunctions/formErorrs';

export default function RegisterForm(props) {
    const [sendEmail, setsendEmail] = useState(false);

    const handlesendEmail = (evt) => setsendEmail(evt.target.checked);
    const [formValidation, setformValidation] = useState({
        formErrors: { email: '', password: '', fullname: '', username: '' },
        formValid: true,
        emailValid: true,
        passwordValid: true,
        userNameValid: true,
        fullNameValid: true
    });

    //SET FORM HANDLES 
    const [userName, setuserName] = useState('');
    const [fullName, setfullName] = useState('');
    const [email, setshowEmail] = useState('');
    const [password, setsPassword] = useState('');
    const [emailInd, setsEmailInd] = useState('');
    const [dateOfBirth, setsDateOfBirth] = useState('');
    const [errroRegister, setserrroRegister] = useState(false);
    const [errorMessage, setserrorMessage] = useState('');

    const handleuserName = (event) => {
        setuserName(event.target.value);
        validateField(event.target.name, event.target.value);
    };
    const handlefullName = (event) => {
        setfullName(event.target.value);
        validateField(event.target.name, event.target.value);
    };
    const handleEmail = (event) => {
        setshowEmail(event.target.value);
        validateField(event.target.name, event.target.value);
    };

    const handlePassword = (event) => {

        setsPassword(event.target.value);
        validateField(event.target.name, event.target.value);
    };

    function validateField(fieldName, value) {
        let fieldValidationErrors = formValidation.formErrors;
        let emailValid = formValidation.emailValid;
        let passwordValid = formValidation.passwordValid;
        let userNameValid = formValidation.userNameValid;
        let fullNameValid = formValidation.fullNameValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = !(value.length < 8);
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'userName':
                userNameValid = !value.length == 0;
                fieldValidationErrors.username = userNameValid ? '' : ' can not be empty';
                break;
            case 'fullName':
                fullNameValid = !value.length == 0;
                fieldValidationErrors.fullname = fullNameValid ? '' : ' can not be empty';
                break;
            default:
                break;
        }
        setformValidation({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            userNameValid: userNameValid,
            fullNameValid: fullNameValid,
            formValid: emailValid && passwordValid
        });
    };

    const handleEmailInd = (event) => setsEmailInd(event.target.value);
    const handleDateOfBirth = (event) => setsDateOfBirth(event.target.value);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }

    function registerUser(event) {
        event.preventDefault();
        const registerData = {
            userName: userName,
            fullName: fullName,
            email: email,
            password: password,
            emailInd: emailInd,
            dateOfBirth: dateOfBirth
        };
        axios
            .post("/register", registerData)
            .then((response) => {
                if (response.data.succes) {
                    console.log("hereeeee");
                    props.handleLogIn();
                } else {
                    setserrorMessage(response.data.data.message);
                    setserrroRegister(true);
                    console.log("hereeeee2");
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    setserrorMessage(error.response);
                    setserrroRegister(true);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    setserrorMessage(error);
                    setserrroRegister(true);
                    console.log(error);
                }
            });
    }

    return (<>
        <div class="container">
            {/* <h6 style={{ "textAlign": "center" }}>SIGN UP WITH Facebook or Google</h6>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <Button style={{ "textAlign": "center", "width": "100%", "color": "black" }} size="md" variant="light">
                            Google
                        </Button>
                    </div>
                    <div class="col-6">
                        <Button style={{ "textAlign": "center", "width": "100%", "color": "black" }} size="md" variant="light">
                            Facebook
                        </Button>
                    </div>
                </div>
            </div>
            <br />
            <h6 style={{ "textAlign": "center" }}>OR JUST USE YOUR Email</h6> */}
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={12}>
                                    Email:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control isInvalid={!formValidation.emailValid} type="email" placeholder="Email" value={email} name="email" onChange={handleEmail} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstName">
                                <Form.Label column sm={12}>
                                    Username:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control isInvalid={!formValidation.userNameValid} type="text" placeholder="Username" value={userName} name="userName" onChange={handleuserName} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
                                <Form.Label column sm={12}>
                                    Full Name:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control isInvalid={!formValidation.fullNameValid}  type="text" placeholder="Full Name" value={fullName} name="fullName" onChange={handlefullName} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" >
                                <Form.Label column sm={12}>
                                    Password:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control isInvalid={!formValidation.passwordValid} type="password" placeholder="Password" value={password} name="password" onChange={handlePassword} required />
                                </Col>
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long.
                                </Form.Text>
                            </Form.Group>

                            {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalBirthDate">
                                <Form.Label column sm={12}>
                                    Date of Birth:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="date" onChange={handleDateOfBirth} />
                                </Col>
                            </Form.Group> */}


                            {/* <fieldset>
                                <Form.Check
                                    type="switch"
                                    label="RECEIVING EMAILS?"
                                    name="formHorizontalEmails"
                                    id="formHorizontalEmails"
                                    onChange={handleEmailInd}

                                />
                                {sendEmail && <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={12}>
                                        Tell us which emails you’d like:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="Discount and sales"
                                            name="formHorizontalRadios"
                                            id="formHorizontalDS"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="New Stuff"
                                            name="formHorizontalRadios"
                                            id="formHorizontalNewStuff"
                                        />
                                    </Col>
                                </Form.Group>}
                            </fieldset> */}
                            {errroRegister && <Alert variant="danger" onClose={() => setserrroRegister(false)} dismissible>
                                {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
                                <p>
                                    {errorMessage}
                                </p>
                            </Alert>}
                            <div className="panel panel-default">
                                <FormErrors formErrors={formValidation.formErrors} />
                            </div>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button disabled={!formValidation.formValid} type="submit" onClick={registerUser}>Sign Up</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
