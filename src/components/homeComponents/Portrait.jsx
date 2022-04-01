import React from 'react';
import { Image, Row, Col, Button } from 'react-bootstrap';

const Portrait = props => {
    const { dataJson, recall } = props;
    return (
        <>
            <Row>
                <Col xs={4} sm={4} md={4} lg={4}></Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <br />
                    <Image src={dataJson.message} thumbnail={true} />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}></Col>
            </Row>
            <Row>
                <Col xs={5} sm={5} md={5} lg={5}></Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <br />
                    <Button variant='secondary' onClick={(e) => recall(e)} >
                        New Call
                    </Button>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5}></Col>
            </Row>
        </>
    )
}

export default Portrait;