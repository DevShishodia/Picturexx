import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

const Popup = (props) => {
    const close = () => {
        props.closeModal();
    }
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.closeModal}
                backdrop="static"
                keyboard={false}
                centered
                dialogClassName="modal-60w"
                style={{backgroundColor : `${props.modalData?.color}77`}}
            >
                <Modal.Body>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" href={props.modalData?.links?.download} target="_blank" >Download</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Popup