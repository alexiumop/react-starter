import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
//services
import httpClient from '../../api/httpClient';
//displays
import NotFound from '../../navigation/displays/NotFound';
//components
import Portrait from '../../components/homeComponents/Portrait';

const Home = props => {
    const [portraits, setPortraits] = useState({});
    const [showError, setShowError] = useState(false);
    const [newImage, setNewImage] = useState('');

    // using a effect for a componentDidMount for first render and ComponentDidUpdate with a observable variable and dismounting componentWillUnmount
    useEffect(() => {
        httpClient.getImages()
            .then(response => {
                setPortraits(response.data);
            })
            .catch(error => {
                let code = error.response.status;
                if (code == '404') {
                    setShowError(true);
                }
            });
    }, [newImage]);

    //handling closing error
    const handleCloseError = close => {
        setShowError(close);
    }

    const handleRecall = recall => {
        setNewImage(recall);
    }

    return (
        <>
            <Container fluid>
                <Portrait dataJson={portraits} recall={handleRecall} />
                {showError ? <NotFound showError={showError} handleClose={handleCloseError} /> : null}
            </Container>
        </>
    )
}

export default Home