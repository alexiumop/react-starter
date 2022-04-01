import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = props => {
    const {showError, handleClose} = props;
    const [show, setShow] = useState(showError);

    const handlerClose = close => {
        setShow(close);
        handleClose(close);
    }
    return(
        <>
            {show ? (
                <Alert variant='danger' onClose={() => handlerClose(false)} dismissible >
                    <Alert.Heading>Lo sentimos!</Alert.Heading>
                    <p>No pudimos encontrar la imagen</p>
                </Alert>
            ): null}
        </>
    )
}

export default NotFound;