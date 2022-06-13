import React, { useState, useEffect } from 'react'
import {Container , Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const param = useParams();
    const [singleData, setSingleData] = useState({});

    
useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos/${param.id}?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setSingleData(response.data));
  },[param.id]);

  
    return (
        <>
        {singleData.id ?
            <Container fluid className=' p-5' style={{backgroundColor: `${singleData?.color}35`}}>
                <Row>
                    <Col md={6}>
                        <img style={{ maxWidth: "100%", maxHeight: "75vh", borderRadius: "5px" }} src={singleData?.urls?.full} alt="Unsplash" />
                    </Col>
                    <Col md={6}>
                        <h3>Uploaded By: {singleData?.user?.name} (@{singleData?.user?.id})</h3>
                        <h4>Upload Date: {singleData?.created_at}</h4>
                        <hr />
                        {singleData?.description ? (
                            <>
                                <h5>Description:</h5>
                                <h6>{singleData?.description}</h6>
                                <hr />
                            </>
                        ) : false}
                        <h6>Width: {singleData?.width}</h6>
                        <h6>Height: {singleData?.height}</h6>
                        <Button className="mt-5" variant="primary" style={{backgroundColor: singleData?.color, borderColor: singleData?.color}} href={singleData?.links?.download} target="_blank">Download</Button>
                    </Col>
                </Row>
            </Container>
            :   <h1>Loading ...</h1>}
        </>
    )
}

export default Detail