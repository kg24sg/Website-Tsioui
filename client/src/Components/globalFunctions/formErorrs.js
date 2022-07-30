import React from 'react';
import Alert from 'react-bootstrap/Alert';
export default function FormErrors(props) {
    return (<>
        <div className='formErrors'>
            {Object.keys(props.formErrors).map((fieldName, i) => {
                if (props.formErrors[fieldName].length > 0) {
                    return (
                        <Alert variant="danger">
                            {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
                            <p>
                                {fieldName} {props.formErrors[fieldName]}
                            </p>
                        </Alert>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    </>
    );
}